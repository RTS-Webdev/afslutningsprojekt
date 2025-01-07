import React from 'react';

export default function Button2({ children }: { children: React.ReactNode }) {
    return (
        <span className="flex items-center space-x-2 hover:animate-pulse">
            <svg data-name="Default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.14 36.15" aria-hidden="true" role="presentation" focusable="false" className="w-8 h-8">
                <path d="M2.81 10.42A17.08 17.08 0 111 18.08h25.84" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeDasharray="117 9" strokeDashoffset="126" className="js-circular-path"></path>
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" className="js-arrow-head">
                    <path d="M14.83 12.47l5.47 5.47"></path>
                    <path d="M20.3 18.22l-5.47 5.46"></path>
                </g>
            </svg>
            <span className="ml-2 font-medium hover:underline-offset-8 hover:underline">
                <a href="">{children}</a>
            </span>
        </span>
    );
}