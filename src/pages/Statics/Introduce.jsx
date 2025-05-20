import React from "react";
import PageMeta from "../Admin/components/common/PageMeta";

const Introduce = () => {
  return (
    <>
      <PageMeta title={"Dinowear - Giới thiệu"} />

      <section class="layoutPage-about-one mt-14">
        <div className="container">
          <div class="section-about01-intro">
            <div class="title text-center font-bold font-title uppercase xl:text-[1.875rem] text-[1.5rem] mb-5">
              Get To Know Who We Are And <br /> What We Do - About Us
            </div>
            <div class="text-center max-w-[80%] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              fringilla nunc in molestie feugiat. Nunc auctor consectetur elit,
              quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nulla fringilla nunc in molestie feugiat
            </div>
          </div>
          <div class="section-about01_introduce mt-10">
            <div class="flex flex-wrap lg:-mx-4">
              <div class="w-full lg:w-1/2 lg:px-4">
                <h2
                  className="uppercase mb-4 lg:mb-6 title-leaner-gradient
                xl:text-[3rem] lg:text-[2rem] text-[1.5rem]"
                >
                  Learn About Us And What Sets Us Apart
                </h2>
                <div class="s-content text-justify text-[1.125rem]">
                  Nằm trong khuôn viên rộng 10ha của Tổ hợp Y tế Phương Đông,
                  Phương Đông Asahi là phức hợp Nghỉ dưỡng - Dưỡng lão cao cấp,
                  quy mô lớn nhất Hà Nội hiện nay, đáp ứng nhu cầu của hơn 400
                  người cao tuổi. Phương Đông Asahi sở hữu hệ thống phòng nghỉ
                  tiêu chuẩn 5 sao, chuỗi tiện ích nội khu đẳng cấp và thừa
                  hưởng trọn vẹn cơ sở vật chất, trang thiết bị đồng bộ, tối tân
                  theo mô hình "Viện trong Viện". Đảm bảo những tiêu chí cao cấp
                  nhất về Nghỉ dưỡng - Dưỡng lão, Phương Đông Asahi mang đến cho
                  người cao tuổi một cuộc sống sang trọng, đẳng cấp và đầy đủ
                  tiện nghi.
                </div>
              </div>
              <div class="w-full lg:w-1/2 lg:px-4">
                <div class="img_full 2xl:rounded-2xl rounded-lg overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/doyfy1aoa/image/upload/v1743775994/1743775964204-formal-style-la-gi_d3676b294d514b1fb0cbaf1d013ae6ee_2048x2048.webp.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduce;
