import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Get_All_Category } from "../../Redux/Actions/CategoryAction";
import { Get_All_Brand_Page } from "../../Redux/Actions/BrandsAction";

import { getOnCategory } from "../../Redux/Actions/SubCategoryAction";
import { CreateProduct } from "../../Redux/Actions/ProductsAction";
import notify from "../../Hook/UseNotification";
export default function AddProductHook() {
  const onSelect = (selectedList) => {
    setSelectedSubID(selectedList);
  };

  const onRemove = (selectedList) => {
    setSelectedSubID(selectedList);
  };

  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = (file) => {};

  // receives array of files that are done uploading when submit button is clicked
  // notice that i called it f.file cause the file to be uploaded and work to be fetched by the server
  const handleSubmit = (files) => {
    const arrayFile = files.map((f) => f.file);
    setImg(arrayFile);
    console.log(arrayFile)
  };

  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState();
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");

  const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم");
  const [priceAfter, setPriceAfter] = useState("السعر بعد الخصم");
  const [qty, setQty] = useState("الكميه المتاحة");
  const [CatID, setCatID] = useState("");
  const [BrandID, SetBrandID] = useState("");
  const [selectedSubID, setSelectedSubID] = useState([]);
  const [colors, setColors] = useState([]);
  const [show, setShow] = useState(false);
  const [options, setOptions] = useState([]);
  const changeCompleteHandler = (color) => {
    setColors([...colors, color.hex]);
    setShow(!show);
  };

  const removeColor = (color) => {
    const newColor = colors.filter((e) => e !== color);
    setColors(newColor);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Get_All_Category());
    dispatch(Get_All_Brand_Page());
  }, []);
  const category = useSelector((state) => state.allCategory.category);
  const brands = useSelector((state) => state.allBrand.brand);

  const subCat = useSelector((state) => state.subCategory.subcategory);
  const onSelectCategory = async (e) => {
    if (e.target.value != 0) {
      await dispatch(getOnCategory(e.target.value));
    }
    setCatID(e.target.value);
  };

  useEffect(() => {
    if (CatID != 0) {
      if (subCat.data) {
        setOptions(subCat.data);
      }
    }
  }, [CatID]);

  //select brand store id
  const onSelectBrand = (e) => {
    SetBrandID(e.target.value);
  };

  // save and post the data on api
  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      productName === "" ||
      img.length <= 0 ||
      priceBefore <= 0 ||
      CatID === 0
    ) {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }
    const formData = new FormData();
    formData.append("title", productName);
    formData.append("description", description);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);
    formData.append("imageCover", img[0]);

    formData.append("category", CatID);
    formData.append("brand", BrandID);

    colors.map((color) => formData.append("availableColors", color));

    selectedSubID.map((item) => formData.append("subcategory", item._id));

    img.map((item) => formData.append("images", item));
    setLoading(true);
    await dispatch(CreateProduct(formData));
    setLoading(false);
  };
  const product = useSelector((state) => state.allProduct.products);
  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      setCatID(0);
      setColors([]);
      setImg([]);
      setProductName("");
      setDescription("");
      setPriceBefore("السعر قبل الخصم");
      setPriceAfter("السعر بعد الخصم");
      setQty("الكميه المتاحة");
      SetBrandID(0);
      setSelectedSubID([]);
      setTimeout(() => setLoading(true), 1500);
      if (product) {
        if (product.status !== 201) {
          notify("هناك مشكله في إضافه المنتج", "error");
        } else {
          notify("تم إضافه المنتج بنجاح", "success");
        }
      }
    }
  }, [loading]);
  return [
    submitHandler,
    onSelectBrand,
    onSelectCategory,
    onSelect,
    onRemove,
    getUploadParams,
    handleChangeStatus,
    handleSubmit,
    changeCompleteHandler,
    removeColor,
    brands,
    category,
    priceAfter,
    priceBefore,
    options,
    colors,
    qty,
    description,
    productName,
    show,
    setProductName,
    setDescription,
    setPriceBefore,
    setPriceAfter,
    setQty,
    setShow,
  ];
}
