import styles from './FooterLast.module.css'

import React from 'react'

const FooterLast = () => {
  return (
    <div style={{backgroundColor : "#1C3967"}} className = {styles.footerLast}>
      <div>
      "@2013 - Công ty Cổ phần Đầu tư và Phát triển Koolsoft"
      <br></br>
      "Giấy chứng nhận đăng ký doanh nghiệp số: 0106353044, cấp bởi Sở kế hoạch và đầu tư TP. Hà Nội"
      </div>
    </div>
  )
}

export default FooterLast