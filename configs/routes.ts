import { MdFavorite } from "react-icons/md";
import { ImStackoverflow } from "react-icons/im";
import { GiPositionMarker } from "react-icons/gi";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";

import { NavItem } from "@/models";

export const CONTROL_ROUTES: NavItem[] = [
  {
    label: "Tra cứu đơn hàng",
    href: "/search-order",
    leftIcon: ImStackoverflow,
  },
  {
    label: "Tìm cửa hàng",
    href: "/stores",
    leftIcon: GiPositionMarker,
  },
  {
    label: "Yêu thích",
    href: "/your-wishlist",
    leftIcon: MdFavorite,
  },
  {
    label: "Đăng nhập",
    href: "/coming-soon",
    leftIcon: FaUser,
  },
  {
    label: "Giỏ hàng",
    href: "/your-cart",
    leftIcon: FaShoppingCart,
  },
];

export const MAIN_ROUTES: NavItem[] = [
  {
    label: "Sản phẩm",
    href: "/product-list",
    rightIcon: RiArrowDownSLine,
  },
  {
    label: "Nam",
    href: "/product-list/men",
    rightIcon: RiArrowDownSLine,
  },
  {
    label: "Nữ",
    href: "/product-list/women",
    rightIcon: RiArrowDownSLine,
  },
  {
    label: "Sale off",
    href: "/promotion/clearance-sale",
  },
  {
    label: "Discover you",
    href: "/discoveryou",
  },
];

export const HOT_NEWS: NavItem[] = [
  {
    label: "BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE",
    href: "/faqs",
  },
  { label: "FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !", href: "/faqs" },
  { label: "HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH", href: "/policy" },
  { label: "BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN", href: "/faqs" },
];
