import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import SingleBlog from '../component/SingleBlog';
const ref = React.createRef();

const Blog = () => {
    const blogs = useLoaderData();
    return (
        <>
            <div className="blog-banner pt-8 px-20 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80')] h-[60vh] bg-no-repeat bg-cover relative z-80 flex justify-center items-center" >
                <div className='z-50'>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf} title='Download pdf' className=' btn-primary '>
                            Download To Pdf
                        </button>}
                    </Pdf>
                </div>


            </div>
            <div className='md:px-20 my-28'>
                <div ref={ref}>
                <h2 className='text-center text-3xl font-bold'> Some Question and Answer</h2>
                        <div className='grid md:grid-cols-2 gap-8 mt-20'>
                                {
                                    blogs.map(blog=> <SingleBlog key={blog.id} blog={blog}/>)
                                }
                        </div>
                </div>
            </div>
        </>
    );
};

export default Blog;