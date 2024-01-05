/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "@/components/layout";

const LastMinuteInfo = () => {

    return (
        <Layout>
            <div className="py-[140px] max-w-[90%] mx-auto">
                <div
                    className="z-[10] bg-white/[0.9] p-[24px] lg:p-[40px] flex flex-col items-start
            gap-[20px] text-left z-[200]"
                >
                    <h1 className="text-4xl font-bold mb-8 mx-auto">{`Last Minute Info & Tips`}</h1>
                    <ul class="list-disc bg-white shadow-lg rounded-lg p-6 text-gray-700 text-md sm:text-xl">
                        <li class="mb-4"><strong>Bring Mexican Pesos!</strong> There are some ATM's in Tepoztlán if you need to get more while you're there.</li>
                        <li class="mb-4"><strong>There is no Uber in Tepoztlán</strong>, so you'll need cash for taking taxis around, including getting back to your hotels on Saturday after the reception. The taxis are safe.</li>
                        <li class="mb-4"><strong>Leave your hotel early on Saturday.</strong> There is a busy street market on Saturday and there will be some traffic on your way to the venue. Leave 15-20 minutes early to arrive on time.</li>
                        <li class="mb-4">Depending on where you stay in Tepoztlán, you may want to walk or take a taxi to the wedding venue (Bajo La Montaña). The last part of the walk is uphill, so keep in mind that if it's hot and you decide to walk, you might break a sweat.</li>
                        <li class="mb-4">The phone number to call a Taxi in Tepoztlán is <a href="tel:+527393953582" class="text-blue-500 hover:text-blue-700">+52 739 395 3582</a></li>
                        <li>The daytime weather should be in the mid to high 70s, with night time temps dropping as low as the mid-50's. We recommend a light jacket or sweater for the evenings.</li>
                    </ul>

                </div>
            </div>
        </Layout>
    );
};

export default LastMinuteInfo;
