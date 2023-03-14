import { MdFavorite } from "react-icons/md";
import { ImStackoverflow } from "react-icons/im";
import { GiPositionMarker } from "react-icons/gi";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";

import { BannerItem, NavItem } from "@/models";

import livingJourney from "@/images/living-journey.jpg";
import hiImMule from "@/images/hi-im-mule.jpg";
import allInBlack from "@/images/banner_all-in-black.jpg";
import basas from "@/images/banner_basas.jpg";
import bannerSaleOff from "@/images/banner_sale-off.jpg";
import menuMen from "@/images/menu_nam.jpg";
import menuWomen from "@/images/menu_nu.jpg";
import menuAccessory from "@/images/menu_phu-kien.jpg";
import menuSaleOff from "@/images/menu_sale-off.jpg";

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

export const PRODUCT_NAV_PANEL_ROUTE: BannerItem[] = [
  { label: "Cho nam", image: menuMen, href: "/product-list/men" },
  { label: "Cho nữ", image: menuWomen, href: "/product-list/women" },
  {
    label: "Outlet sale",
    image: menuSaleOff,
    href: "/promotion/clearance-sale",
  },
  {
    label: "Thời trang & phụ kiện",
    image: menuAccessory,
    href: "/product-list/accessories",
  },
];

export const BANNER_MAIN_ROUTES: BannerItem[] = [
  {
    href: "/product-list/living-journey",
    image: livingJourney,
  },
  {
    href: "/product-list/slip-on",
    image: hiImMule,
  },
];

export const BANNER_SUPPORT_ROUTES: BannerItem[] = [
  {
    label: "All black in black",
    href: "/product-list/all-in-black",
    image: allInBlack,
    description:
      "Mặc dù được ứng dụng rất nhiều, nhưng sắc đen lúc nào cũng toát lên một vẻ huyền bí không nhàm chán",
  },
  {
    label: `BÌNH MỚI RƯỢU "MỚI"`,
    href: "/product-list/basas",
    image: basas,
    description:
      "Vẫn kế thừa vẻ tối giản, nguyên bản đã được định hướng bởi cái tên, Basas mới trở lại với những cải tiến đáng giá chắc chắn sẽ đem đến một trải nghiệm thú vị như hành trình chúng tôi làm ra nó.",
  },
];

export const BANNER_SALE_OFF_ROUTE: BannerItem = {
  label: "Outlet sale",
  href: "/promotion/clearance-sale",
  image: bannerSaleOff,
  description:
    'Danh mục những  sản phẩm bán tại "giá tốt hơn" chỉ được bán kênh online - Online Only, chúng đã từng làm mưa làm gió một thời gian và hiện đang rơi vào tình trạng bể size, bể số.',
};
