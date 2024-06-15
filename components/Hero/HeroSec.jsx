'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";
import { Toaster, toast } from 'sonner'


const HeroSec = () => {
  const [link, setLink] = useState('');
  const [shortLink, setShortLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const shortenPromise = new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/api/shorten', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ link })
        });

        const result = await response.json();
        if (response.ok) {
          resolve(result);
        } else {
          reject(new Error(result.error));
        }
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(shortenPromise, {
      loading: 'Loading...',
      success: (data) => {
        setShortLink(data.shortURL);
        return 'Link Shortned!';
      },
      error: 'Error occurred',
    });
  };




  const handleCopy = () => {
    navigator.clipboard.writeText(shortLink);
    toast.success('Copied to clipboard!');
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 justify-center h-[80vh] flex gap-6 items-center flex-col">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Free Open-Source Link Shortener</h1>
        <p className="text-slate-500 text-sm p-4">
          This is a free tool to shorten URLs powered by{" "}
          <Link href="http://short.io/" className="text-purple-600">
            Short.io
          </Link>
          . Create short & memorable links in seconds.
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex space-x-2 w-96">
          <input
            type="url"
            name="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter the link here..."
            className="border border-gray-300 dark:border-gray-700 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-purple-300 w-[80%]"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 text-white rounded-md p-2 hover:bg-purple-700 cursor-pointer"
          >
            Short
          </button>
        </form>
        {shortLink && (
          <div className="relative mt-4 w-96">
            <input
              type="text"
              value={shortLink}
              readOnly
              className="border border-gray-300 dark:border-gray-700 rounded-md p-2 focus:outline-none focus:ring-0 w-[95%] bg-slate-100 dark:bg-slate-800"
            />
            <button
              onClick={handleCopy}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl bg-purple-600 text-white rounded-md p-[10px] hover:bg-purple-700 cursor-pointer flex items-center space-x-1"
            >
              <FiCopy />
            </button>
            <Toaster richColors position="top-center" />
          </div>
        )}
      </div>
      <div className=" absolute bottom-3">
        <div>
          <p className=" text-sm font-medium">Made with <span className=" text-red-700">&#x2764;</span> by <Link href={'https://manojkumar.one'} className=" text-purple-600">Manoj Kumar</Link></p>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
