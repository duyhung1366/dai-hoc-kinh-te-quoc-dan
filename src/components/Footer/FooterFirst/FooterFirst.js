import React from "react";

import { GoLocation } from "react-icons/go";
import styles from "./FooterFirst.module.scss";
import Title from "./Title/Title";
import Info from "./Info/Info";
import FooterDownload from "./FooterDownload/FooterDownload";
import FooterIcon from "./FooterIcon/FooterIcon";

const FooterFirst = () => {
  return (
    <div style={{ backgroundColor: "#DBE3EF" }} className={styles.footer}>
      <div className="grid wide">
        <div className="row">
          <div className="col l-5 c-12 m-12">
            <div className="row">
              {/* col1 */}
              <div className="col l-7 c-12 m-7">
                <Title text="Thông Tin" />
                <Info
                  link="mailto:info@onthisinhvien.com"
                  text="Email: info@onthisinhvien.com"
                />
                <Info
                  link="https://onthisinhvien.com/truong/tel:0345%20899%20842"
                  text="Hotline: 0345899842"
                />
                <Info text="Giờ làm việc: 8h00 - 11h30, 14h - 17h30" />
                <div className={styles.footerMap}>
                  {/* thông báo bộ công thương */}
                  <div>
                    <img
                      alt=""
                      src="https://onthisinhvien.com/resources/images/dathongbao.png"
                    />
                  </div>
                  {/* map */}
                  <div>
                    <a
                      href="https://www.google.com/maps/place/%C3%94n+thi+sinh+vi%C3%AAn+HL/@21.0117061,105.8755866,12.27z/data=!4m5!3m4!1s0x0:0x15f24c1278810bcf!8m2!3d21.00247!4d105.8452792?hl=vi"
                      target="_blank"
                      className={styles.maps}
                    >
                      on google map!
                    </a>
                  </div>
                </div>
              </div>
              {/* col 2 */}
              <div className="col l-5 c-12 m-5">
                <Title text="Tiện Ích" />
                <Info link="https://onthisinhvien.com/" text="Trang chủ" />
                <Info
                  link="https://onthisinhvien.com/tat-ca-khoa-hoc"
                  text="Khóa học"
                />
                <Info
                  link="https://onthisinhvien.com/danh-muc/tuyen-dung"
                  text="Tuyển dụng"
                />
                <Info link="https://onthisinhvien.com/tailieu" text="Đề thi" />
                <Info link="https://onthisinhvien.com/tin-tuc" text="Tin tức" />
              </div>
            </div>
          </div>
          <div className="col l-7 c-12 m-12">
            <div className="row">
              {/* col 3 */}
              <div className="col l-5 c-12 m-5">
                <Title text="Tiện Ích" />
                <Info
                  link="https://onthisinhvien.com/tin-tuc/nhung-cau-hoi-thuong-gap"
                  text="Những câu hỏi thường gặp"
                />
                <Info
                  link="https://onthisinhvien.com/tin-tuc/bo-quy-tac-hanh-xu-cua-mentor-va-hoc-vien-tren-otsv"
                  text="Bộ quy tắc hành xử của mentor và học viên trên otsv "
                />
                <Info
                  link="https://onthisinhvien.com/chinh-sach-chung"
                  text="Chính sách chung"
                />
                <Info
                  link="https://onthisinhvien.com/chinh-sach-bao-mat-thong-tin"
                  text="Chính sách bảo mật thông tin"
                />
                <Info
                  link="https://onthisinhvien.com/tin-tuc/huong-dan-kich-hoat-khoa-hoc"
                  text="Hướng dẫn kích hoạt khóa học"
                />
                <Info
                  link="https://onthisinhvien.com/tin-tuc/chinh-sach-hoan-tra-hoc-phi"
                  text="Chính sách hoàn trả học phí"
                />
              </div>
              {/* col 4 */}
              <div className="col l-4 c-12 m-4">
                <Title text="HỢP TÁC &#38; LIÊN KẾT" />
                <Info
                  link="https://shopee.vn/onthisinhvienuehuel"
                  text="Shopee UEH, UEL"
                />
                <Info link="https://shopee.vn/otsvneu" text="Shopee NEU" />
                <Info
                  link="https://shopee.vn/onthisinhvien"
                  text="Shopee VPP"
                />
                <Info
                  link="https://shopee.vn/onthisinhvienuel"
                  text="Shopee TMU, HVTC"
                />
                <Info
                  link="https://shopee.vn/onthisinhvien.otsv"
                  text="Shopee HUCE"
                />
              </div>
              {/* col 5 */}
              <div className="col l-3 c-12 m-3">
                <Title text="TẢI APP" />
                <FooterDownload link="https://onthisinhvien.com/resources/images/otsv/chplay-download.png" />
                <FooterDownload link="https://onthisinhvien.com/resources/images/otsv/app-store-download.png" />
                <div>
                  <div className={styles.titleConnect}>
                    Kết nối với chúng tôi
                  </div>
                  <div className="d-flex">
                    <FooterIcon
                      linka="https://www.youtube.com/c/%C3%94nthiSinhvi%C3%AAn"
                      linksrc="https://onthisinhvien.com/resources/images/otsv/youtube.svg"
                    />
                    <FooterIcon
                      linka="https://www.facebook.com/onthisinhvientoanquoc"
                      linksrc="https://onthisinhvien.com/resources/images/otsv/fb.svg"
                    />
                    <FooterIcon
                      linka="https://vt.tiktok.com/ZSdFqy8Yc/"
                      linksrc="https://onthisinhvien.com/resources/images/otsv/tiktok.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerLocation}>
          <a
            href="https://onthisinhvien.com/truong/dai-hoc-kinh-te-quoc-dan#"
            target="_blank"
            rel="noreferrer"
          >
            <GoLocation />
            Địa Chỉ: Số 69, Ngõ 40 Tạ Quang Bửu, Q.Hai Bà Trưng, TP. Hà Nội
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterFirst;
