import React from 'react'

const BottomBanner = (props) => {
    return (
        <>
            <div className={`w-full relative h-[22.5rem] rounded-3xl my-10 bg-no-repeat overflow-hidden duration-300 bg-[length:711px_500px] bg-right`}
                style={{
                    backgroundImage: `url("${props.image}")`,
                    backgroundColor: props.bg
                }}
            >

                <div className="absolute flex flex-col items-start gap-y-3 top-1/2 -translate-y-1/2 left-24  drop-shadow-2xl"
                    style={{ color: props.text }}
                >
                    <h1 className="font-bold text-4xl w-96">{props.title}</h1>
                    <p className="w-80">{props.subtitle}</p>
                    <button
                        style={{ backgroundColor: props.bgBtn,
                                color : props.bg
                         }}
                        className={`w-fit px-5 py-2 rounded-full shadow-sm font-semibold`}>{props.btntext}</button>
                </div>
            </div>
        </>
    )
}

export default BottomBanner
