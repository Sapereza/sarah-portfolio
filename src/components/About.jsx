import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-slate-500 to-red-500 text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <h1 className="text-3xl font-bold inline border-b-4 border-white">About</h1>
            </div>
            <div>
                <p className="text-xl mt-20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolor perspiciatis eius consequatur tempore mollitia eos? Quaerat, aliquam quos odio aut, illo autem doloribus asperiores non exercitationem hic voluptas explicabo rerum vel, dolores inventore architecto omnis sunt quas ab tenetur similique nam obcaecati? Facere cumque sunt tempora officiis perspiciatis. Eligendi?
                </p>
                <br/>
                <p className="text-xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam voluptatem ab fugit voluptas quisquam dignissimos assumenda rem sapiente asperiores animi adipisci saepe blanditiis eos, ad nam? Illo dolorum corrupti voluptates quam neque nihil eius cupiditate quidem omnis minus, labore natus, minima veritatis eveniet repellendus magni amet doloremque porro vero iste?
                </p>
            </div>

        </div>
    </div>
  )
}

export default About