"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"
import { banners } from "./banner"
import Image from "next/image"

export default function SliderShow() {
    return (
        <div className="absolute inset-0 w-full h-full">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="w-full h-full"
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                            <Image
                                src={banner.imageUrl}
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
