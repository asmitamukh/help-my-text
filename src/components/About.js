import React from 'react';

export default function AboutUs(props) {
  return (
    <>
    <div className="container py-4" style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black' }}>
      <h1 className="mb-4">About Us</h1>
      <p className="lead">
        <strong>Help My Text</strong> is a lightweight, easy-to-use text utility tool that helps you manipulate and analyze your text quickly and efficiently.
      </p>
      <p>
        Whether you need to convert your text to uppercase or lowercase, perform quick find-and-replace operations, or simply analyze the number of words and characters — TextUtils has you covered.
      </p>
      <p>
        Key Features:
      </p>
      <ul>
        <li>Convert text to <strong>uppercase</strong> or <strong>lowercase</strong></li>
        <li><strong>Find and replace</strong> specific words</li>
        <li>Clear text instantly</li>
        <li>View <strong>word and character count</strong> in real-time</li>
        <li>Dark mode support for better readability</li>
      </ul>
      <p className="mt-4">
        This tool is built with <strong>React</strong> and designed to be fast, responsive, and user-friendly. Ideal for students, writers, and developers who need quick text editing features.
      </p>
    </div>
    </>
    
  );
}
