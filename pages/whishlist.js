import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import WhishlistItem from "@/components/WhishlistItem";
import { useSelector } from "react-redux";

 const Whishlist = () => {
    const { whishlistItems } = useSelector((state) => state.cart);

    return (
        <div className="w-full md:py-20">
            <Wrapper>
                {whishlistItems.length > 0 && (
                    <>
                        {/* HEADING AND PARAGRAPH START */}
                        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                                Shopping Whishlist
                            </div>
                        </div>
                        {/* HEADING AND PARAGRAPH END */}

                        {/* CART CONTENT START */}
                        <div className="flex flex-col lg:flex-row gap-12 py-10">
                            {/* CART ITEMS START */}
                            <div className="flex-[2]">
                                <div className="text-lg font-bold">
                                Whishlist Items
                                </div>
                                {whishlistItems.map((item) => (
                                    <WhishlistItem key={item.id} data={item} />
                                ))}
                            </div>
                            {/* CART ITEMS END */}
                        </div>
                        {/* CART CONTENT END */}
                    </>
                )}

                {/* This is empty screen */}
                {whishlistItems.length < 1 && (
                    <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                        <Image
                            src="/empty-cart.jpg"
                            width={300}
                            height={300}
                            className="w-[300px] md:w-[400px]"
                        />
                        <span className="text-xl font-bold">
                            Your Whishlist is empty
                        </span>
                        <span className="text-center mt-4">
                            Looks like you have not added anything in your Whishlist.
                            <br />
                            Go ahead and explore top categories.
                        </span>
                        <Link
                            href="/"
                            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                )}
            </Wrapper>
        </div>
    );
};

export default Whishlist;
