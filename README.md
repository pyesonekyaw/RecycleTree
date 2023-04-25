<br />
<p align="center">
  <a href="/public/static/banner.png">
    <img src="/public/static/banner.png" alt="Logo" >
  </a>

  <p align="center">
    Enabling you to smart recycling in our smart nation!
    <br />
    <br />
    <a href="https://recycletree.pyesonekyaw.com/">View Demo</a>
  </p>
</p>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>

## About The Project

  <a href="/public/static/recycleTabs.png">
    <img src="/public/static/recycleTabs.png" alt="Logo" >
  </a>

RecycleTree is a project from CZ3002 Advanced Software Engineering in Nanyang Technological University. It aims to enable users to have a more informed recycling experience, from finding the nearest recycling bins, to checking whether the item they wish to recycle can indeed be recycled, to learning more about recycling and contamination in general.

RecycleTree has three main components:

- RecycleGoWhere - Finding the nearest recycling bins to the user's location based on data provided by data.gov.sg
- RecycleCanMeh - Checking if the item to be recycled can indeed be recycled based on image classification models
- RecycleHowAh - Learning more about recycling and contamination of recyclables

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Huggingface](https://huggingface.co/)
- [Supabase](https://supabase.com/)

Test framework:

[![Cypress Tests](https://github.com/Toefinder/RecycleTree/actions/workflows/main.yaml/badge.svg)](https://github.com/Toefinder/RecycleTree/actions/workflows/main.yaml)

### Getting Started

1. Get a [Google Maps API Key](https://developers.google.com/maps/documentation)
2. Create a [Supabase project](https://app.supabase.com/projects/)
3. Create a HuggingFace account
4. Clone the repo
5. Install NPM packages
   ```sh
   npm install
   ```
6. Save your API keys from Google Maps, Supabase, and HuggingFace in a `.env` file
7. Create a [HuggingFace Space](https://huggingface.co/spaces/pyesonekyaw/RecycleTree) and replace the necessary links inside the codebase
8. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

## Contributors

- Pye Sone Kyaw
- Kasidis Chantharojwong
- Le Quang Anh
- Cheng Zhengjie
- Flora Lam Wen Hui
- Lin Lejia
- Shang Ziyuan
