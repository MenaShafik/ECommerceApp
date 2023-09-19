import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit.esm";
import { AiFillTwitterCircle } from "@react-icons/all-files/ai/AiFillTwitterCircle.esm";
import { BiPhone } from "@react-icons/all-files/bi/BiPhone.esm";
import { BiShoppingBag } from "@react-icons/all-files/bi/BiShoppingBag.esm";
import { BiSortDown } from "@react-icons/all-files/bi/BiSortDown.esm";
import { BsHeart } from "@react-icons/all-files/bs/BsHeart.esm";
import { BsStar } from "@react-icons/all-files/bs/BsStar";
import { BsStarFill } from "@react-icons/all-files/bs/BsStarFill.esm";
import { BsStarHalf } from "@react-icons/all-files/bs/BsStarHalf";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile.esm";
import { TiDeleteOutline } from "@react-icons/all-files/ti/TiDeleteOutline.esm";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook.esm";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram.esm";

const StarIcon = () => {
  return (
    <>
      <BsStarFill style={{ color: "Orange", width: "20px", height: "20px" }} />
    </>
  );
};
const StarHalfIcon = () => {
  return (
    <>
      <BsStarHalf />
    </>
  );
};
const StarEmptyIcon = () => {
  return (
    <>
      <BsStar />
    </>
  );
};
const HeartIcon = () => {
  return (
    <div>
      <BsHeart
        className="text-center"
        style={{ height: "24px", width: "35px", cursor: "pointer" }}
      />
    </div>
  );
};

const ShopingIcon = () => {
  return (
    <div>
      <BiShoppingBag className="mx-1" style={{ fontSize: "25px" }} />
    </div>
  );
};

const ProfileIcon = () => {
  return (
    <div>
      <CgProfile
        className="mx-1"
        style={{ fontSize: "25px", color: "white" }}
      />
    </div>
  );
};

const PhoneIcon = () => {
  return (
    <>
      <BiPhone className="footer_icons text-success" />
    </>
  );
};

const FacebookIcon = () => {
  return (
    <>
      <TiSocialFacebook className=" footer_icons" />
    </>
  );
};
const InstagremIcon = () => {
  return (
    <>
      <TiSocialInstagram className=" footer_icons text-danger" />
    </>
  );
};

const TwitterIcon = () => {
  return (
    <>
      <AiFillTwitterCircle className="text-info footer_icons" />
    </>
  );
};

const DeleteIcon = () => {
  return (
    <>
      <TiDeleteOutline
        className="text-danger mx-1"
        style={{ fontSize: "20px" }}
      />
    </>
  );
};

const EditIcon = () => {
  return (
    <>
      <AiFillEdit className="mx-1 my-1 text-info" />
    </>
  );
};
const SortDownIcon = () => {
  return (
    <>
      <BiSortDown
        className="mx-1"
        style={{ fontSize: "25px", color: "black" }}
      />
    </>
  );
};
export {
  StarIcon,
  StarEmptyIcon,
  StarHalfIcon,
  HeartIcon,
  ShopingIcon,
  ProfileIcon,
  PhoneIcon,
  FacebookIcon,
  InstagremIcon,
  TwitterIcon,
  DeleteIcon,
  EditIcon,
  SortDownIcon,
};
