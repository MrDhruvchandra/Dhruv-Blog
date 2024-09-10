import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS

const QuillEditor = () => {
  const [content, setContent] = useState('');

  const handleContentChange = (value) => {
    setContent(value); // Set the blog content
  };

  const handleSubmit = () => {
    // Handle blog submission logic here
    console.log('Blog Content:', content);
  };

  return (
    <>
      <main className="bg-transparent pt-20 rounded-md">
        <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px]">
          <div className="grid grid-cols-1 items-center gap-8 dark:text-black md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center items-center gap-4  text-center text-black md:items-start md:text-left"
            >
              <h1 className="text-4xl ">
                Start Writing Your Next Great Blog!
              </h1>
              <p>
                Share your ideas, experiences, or thoughts with a community of bloggers. Let your words inspire others!
              </p>
            </div>
          </div>

          {/* Blog Writing Section */}
          <div className="container mt-8 p-4 bg-slate-50">
            <h2 className="text-3xl font-bold text-center mb-4">Write Your Blog Post</h2>
            <div className="bg-green-100 p-4 rounded-lg shadow-lg">
              <ReactQuill
                value={content}
                onChange={handleContentChange}
                placeholder="Write something amazing..."
                modules={{
                  toolbar: [
                    ['bold', 'italic', 'underline', 'strike'], // formatting buttons
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    ['link', 'image'], // insert buttons
                  ],
                }}
                className="mb-4 h-64" // Adjust height as needed
              />
              <button
                onClick={handleSubmit}
                className="mt-10 px-4 py-2 bg-emerald-500 text-black rounded-md hover:bg-emerald-600"
              >
                Publish Blog
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default QuillEditor;
