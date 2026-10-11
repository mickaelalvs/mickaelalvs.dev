# 👨🏻‍💻 mickaelalvs.dev

Personal portfolio and blog of **Mickaël Alves** - Tech Lead Frontend, Speaker, and Developer Experience enthusiast.

## 🚀 Tech Stack

This portfolio is built with modern web technologies:

- ⚡ **[Next.js 16](https://nextjs.org)** - React framework with App Router
- ⚛️ **[React 19](https://react.dev)** - Latest React with compiler
- 🎨 **[Motion](https://motion.dev/)** - Smooth animations
- 🔍 **[nuqs](https://nuqs.47ng.com/)** - Type-safe URL search params
- 📝 **[MDX](https://mdxjs.com/)** - Blog posts with `next-mdx-remote`, Shiki syntax highlighting and `rehype-slug`
- 🎭 **[Lottie](https://airbnb.io/lottie/)** - Interactive animations
- 🎯 **[Radix UI](https://www.radix-ui.com/)** - Accessible UI components
- 🧹 **[Oxlint](https://oxc.rs/docs/guide/usage/linter)** & **[Oxfmt](https://oxc.rs/docs/guide/usage/formatter)** - Fast linting & formatting
- 📦 **[pnpm](https://pnpm.io/)** - Efficient package manager

## ✨ Features

- 📚 **Blog** - Technical articles and tutorials
- 🎤 **Talks** - Conference presentations and meetup sessions
- 🎙️ **Podcasts** - Tech podcast appearances
- 💼 **Projects** - Showcase of open-source and personal projects
- ℹ️ **About** - Career, community involvement, and education
- 🔎 **Command Bar** - Quick navigation and full-text search of talks, articles and podcasts with `Cmd+K` (`kbar` + [Pagefind](https://pagefind.app/))
- 🌐 **SEO Optimized** - OpenGraph, JSON-LD, and sitemap
- ⚡ **Performance** - Optimized images, fonts, and code splitting

## 🛠️ Getting Started

### Prerequisites

- Node.js >= 24.x
- pnpm >= 12.x

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production (generates icons, then the search index)
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
mickaelalvs.dev/
├── app/              # Next.js App Router pages
├── modules/          # React components organized by feature
├── data/             # Content data (talks, projects, etc.)
├── articles/         # Markdown blog posts
├── lib/              # Blog, JSON-LD and Shiki helpers
├── scripts/          # Icon generation and search index build
├── public/           # Static assets
└── utils/            # Helper utilities
```

## 🧑‍💻 Development

```bash
# Lint code
pnpm lint

# Lint and auto-fix
pnpm lint:fix

# Format code
pnpm format

# Check formatting (used in CI)
pnpm format:check
```

## Credits

This project was built using the portfolio template by [Zeno Rocha](https://github.com/zenorocha). The original template is available under the MIT License.

## License

MIT License - see the [LICENSE](LICENSE) file for details.
