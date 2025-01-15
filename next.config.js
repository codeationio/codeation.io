module.exports = {
  async redirects() {
    return [
      {
        source: '/qr-code',
        destination: '/',
        permanent: false,
      },
    ]
  },
  experimental: { images: { allowFutureImage: true } },
  images: {
    domains: ['images.unsplash.com'],
  },
};
