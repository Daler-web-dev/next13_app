import { Metadata } from 'next';
import React from 'react';

interface pageProps {
    
}

export const metadata: Metadata = {
    title: "About us",
    description: "We are a social media company",
}

const Page: React.FC<pageProps> = async () => {

    return (
        <main>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet.</p>
        </main>
    );
};

export default Page;