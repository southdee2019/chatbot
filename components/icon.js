import React from "react";

import {
  FaPlus,
  FaArrowRight,
  FaTrash,
  FaTimes,
  FaCheck,
  FaEdit,
  FaClipboard,
  FaUserAlt,
  FaWhatsapp,
  FaFacebookF,
  FaPhoneAlt,
  FaTwitter,
  FaInstagram,
  FaInternetExplorer,
} from "react-icons/fa";

import { HiOutlineDocumentAdd, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

import { MdArrowDropDown, MdOutlineMoreHoriz, MdPublic, MdOpenInNew, MdOutlineCloudUpload, MdOutlineCloudDownload } from "react-icons/md";

import {
  FcFolder,
  FcDocument,
  FcQuestions,
  FcImageFile,
  FcVideoFile,
  FcViewDetails,
  FcCustomerSupport
} from "react-icons/fc";

const Icon = ({ name, src="", size = "w-5 h-5", ...props }) => {
  if (name === "more") { return <MdOutlineMoreHoriz className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "yes") { return <FaCheck className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "no") { return <FaTimes className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "edit") { return <FaEdit className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "enter") { return <FaArrowRight className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "create") { return <FaPlus className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "destroy") { return <FaTrash className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "whatsapp") { return <FaWhatsapp className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "user") { return <FaUserAlt className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "support") { return <FcCustomerSupport className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "website") { return <FaInternetExplorer className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "facebook") { return <FaFacebookF className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "twitter") { return <FaTwitter className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "instagram") { return <FaInstagram className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "address") { return <HiOutlineLocationMarker className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "email") { return <HiOutlineMail className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "contact") { return <FaPhoneAlt className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "clipboard") { return <FaClipboard className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "public") { return <MdPublic className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "open") { return <MdOpenInNew className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "upload") { return < MdOutlineCloudUpload className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "download") { return < MdOutlineCloudDownload className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "folder") { return <FcFolder className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "dropdown") { return <MdArrowDropDown className={`inline-block ${size} stroke-current`} {...props} />; }
  if (name === "file") {
    if (src === "add") { return <HiOutlineDocumentAdd className={`inline-block ${size} stroke-current`} {...props} />; }
    if (src === "pdf" || src === "doc" || src === "docx") { return <FcDocument className={`inline-block ${size} stroke-current`} {...props} />; }
    if (src === "jpg" || src === "png" || src === "jpeg") { return <FcImageFile className={`inline-block ${size} stroke-current`} {...props} />; }
    if (src === "mp4" || src === "mov" || src === "wmv" || src === "wav" || src === "avi") { return <FcVideoFile className={`inline-block ${size} stroke-current`} {...props} />; }
    if (src === "ifc" || src === "dwg") { return <FcViewDetails className={`inline-block ${size} stroke-current`} {...props} />; }
    return <FcQuestions className={`inline-block ${size} stroke-current`} {...props} />;
  }

  return (
    <div className="avatar" {...props}>
      <div className={`${size} rounded`}>
        {(src.length === 0) ? <span className="text-xl">{name}</span> : <img src={src} alt={`avatar ${name}`} />}
      </div>
    </div>
  )
};

export default Icon;
