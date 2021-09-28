import path from 'path'
import axios from 'axios'

export default {
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )

    return []
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    [
      require.resolve('react-static-plugin-less'),
      {
        includePaths: ["src/"],
        javascriptEnabled: true,
      }
    ],
  ],
}
