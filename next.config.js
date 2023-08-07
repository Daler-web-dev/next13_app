/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experemental: {
        appDir: true
    },
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "avatars.githubusercontent.com",
            port: "",
            pathname: "/u/**"
        }]
    }
}

module.exports = nextConfig