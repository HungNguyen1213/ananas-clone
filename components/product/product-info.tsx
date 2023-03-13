import {
  Accordion,
  Box,
  Button,
  Divider,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Product } from "@chec/commerce.js/types/product";
import * as React from "react";
import parse from "html-react-parser";
import Image from "next/image";

import { AccordionItem } from "../common";
import { useCartStore } from "@/hooks";

import sizeChart from "@/images/size-chart.jpg";

export interface ProductInfoProps {
  product: Product;
  children?: React.ReactElement;
}

export function ProductInfo({ product, children }: ProductInfoProps) {
  const { addToCart, isLoading } = useCartStore();

  return (
    <Box>
      <Text textStyle={"h1"} mb="30px">
        {product.name}
      </Text>
      <Text textStyle={"p"} mb="30px">
        Mã sản phẩm:{" "}
        <Text as="span" display="inline-block" fontWeight={"bold"}>
          {product?.sku || "N/A"}
        </Text>
      </Text>
      <Text textStyle={"h2"} color="primary" mb="30px">
        {product.price.formatted_with_code}
      </Text>
      <Divider
        mb="30px"
        borderBottomWidth="2px"
        borderStyle="dashed"
        opacity={1}
      />
      {product?.description && (
        <>
          <Text as="div" textStyle={"p"} mb="30px">
            {parse(product.description)}
          </Text>
          <Divider
            mb="30px"
            borderBottomWidth="2px"
            borderStyle="dashed"
            opacity={1}
          />
        </>
      )}
      {children}
      <Box mb={5}>
        <Button
          width="100%"
          onClick={() => addToCart(product.id, 1)}
          isLoading={isLoading}
          loadingText="Thêm vào giỏ hàng"
          spinnerPlacement="end"
        >
          Thêm vào giỏ hàng
        </Button>
      </Box>
      <Box>
        <Button width="100%" bg="primary" _hover={{ bg: "orange.600" }}>
          Thanh toán
        </Button>
      </Box>
      <Accordion allowToggle>
        <AccordionItem title="Thông tin sản phẩm">
          <Divider
            mt={6}
            mb={5}
            borderBottomWidth="2px"
            borderStyle="dashed"
            opacity={1}
          />
          <Text textStyle={"p"} mb="10px">
            Sản phẩm được Double Box khi giao hàng.
            <br />
            Khuyến nghị chọn truesize hoặc +1 size (tùy form chân) so với giày
            Ananas Vulcanized
          </Text>
          <Box position="relative" height="358px">
            <Image src={sizeChart} alt="Size chart" fill />
          </Box>
        </AccordionItem>
        <AccordionItem title="Quy định đổi sản phẩm">
          <Divider
            mt={6}
            mb={5}
            borderBottomWidth="2px"
            borderStyle="dashed"
            opacity={1}
          />
          <UnorderedList
            ml="0"
            sx={{
              "& li": {
                paddingLeft: "24px",
                listStyle: "none",
                background: `url("/policy_bullet.png") no-repeat 5px 7px`,
                mb: "4px",
              },
            }}
          >
            <ListItem>
              Chỉ đổi hàng 1 lần duy nhất, mong bạn cân nhắc kĩ trước khi quyết
              định.
            </ListItem>
            <ListItem>
              Thời hạn đổi sản phẩm khi mua trực tiếp tại cửa hàng là 07 ngày,
              kể từ ngày mua. Đổi sản phẩm khi mua online là 14 ngày, kể từ ngày
              nhận hàng.
            </ListItem>
            <ListItem>
              Sản phẩm đổi phải kèm hóa đơn. Bắt buộc phải còn nguyên tem, hộp,
              nhãn mác.
            </ListItem>
            <ListItem>
              Sản phẩm đổi không có dấu hiệu đã qua sử dụng, không giặt tẩy, bám
              bẩn, biến dạng.
            </ListItem>
            <ListItem>
              Ananas chỉ ưu tiên hỗ trợ đổi size. Trong trường hợp sản phẩm hết
              size cần đổi, bạn có thể đổi sang 01 sản phẩm khác:
              <br />- Nếu sản phẩm muốn đổi ngang giá trị hoặc có giá trị cao
              hơn, bạn sẽ cần bù khoảng chênh lệch tại thời điểm đổi (nếu có).
              <br />- Nếu bạn mong muốn đổi sản phẩm có giá trị thấp hơn, chúng
              tôi sẽ không hoàn lại tiền.
            </ListItem>
            <ListItem>
              Trong trường hợp sản phẩm - size bạn muốn đổi không còn hàng trong
              hệ thống. Vui lòng chọn sản phẩm khác.
            </ListItem>
            <ListItem>
              Không hoàn trả bằng tiền mặt dù bất cứ trong trường hợp nào. Mong
              bạn thông cảm
            </ListItem>
          </UnorderedList>
        </AccordionItem>
        <AccordionItem title="Bảo hành thế nào?">
          <Divider
            mt={6}
            mb={5}
            borderBottomWidth="2px"
            borderStyle="dashed"
            opacity={1}
          />
          <Text textStyle={"p"} mb="10px">
            Mỗi đôi giày Ananas trước khi xuất xưởng đều trải qua nhiều khâu
            kiểm tra. Tuy vậy, trong quá trình sử dụng, nếu nhận thấy các lỗi:
            gãy đế, hở đế, đứt chỉ may,...trong thời gian 6 tháng từ ngày mua
            hàng, mong bạn sớm gửi sản phẩm về Ananas nhằm giúp chúng tôi có cơ
            hội phục vụ bạn tốt hơn. Vui lòng gửi sản phẩm về bất kỳ cửa hàng
            Ananas nào, hoặc gửi đến trung tâm bảo hành Ananas ngay trong trung
            tâm TP.HCM trong giờ hành chính:
          </Text>
          <Text textStyle={"p"}>
            Địa chỉ: 170-172, Đinh Bộ Lĩnh, P.26 , Q.Bình Thạnh, TP.HCM Hotline:
            028 2211 0067
          </Text>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
