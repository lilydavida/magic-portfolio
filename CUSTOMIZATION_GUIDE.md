# Portfolio Customization Guide

This guide will help you customize your Magic Portfolio to make it your own. I've already updated the main configuration files with placeholder text and comments to guide you.

## 🚀 Quick Start

1. **Update Personal Information** - Edit `src/resources/content.js`
2. **Replace Images** - Add your own photos to `public/images/`
3. **Add Your Projects** - Create new project files in `src/app/work/projects/`
4. **Customize Styling** - Modify `src/resources/once-ui.config.js`
5. **Update SEO** - Change domain and metadata

## 📝 Step-by-Step Customization

### 1. Personal Information (`src/resources/content.js`)

The main file to customize your portfolio content:

#### Basic Info
```javascript
const person = {
  firstName: "Your", // ← Change to your first name
  lastName: "Name", // ← Change to your last name
  role: "Your Role", // ← Change to your role (e.g., "Software Engineer")
  avatar: "/images/avatar.jpg", // ← Replace with your photo
  email: "your.email@example.com", // ← Your email
  location: "America/New_York", // ← Your IANA timezone (e.g., "America/New_York", "Europe/London", "Asia/Tokyo")
  languages: ["English", "Spanish"], // ← Your languages (comment out or leave empty to hide)
};
```

**Important**: The `location` field must be a valid IANA timezone identifier (like "America/New_York") because it's used to display the current time in your timezone in the header. Common timezones:
- `"America/New_York"` - Eastern Time
- `"America/Los_Angeles"` - Pacific Time  
- `"Europe/London"` - UK Time
- `"Asia/Tokyo"` - Japan Time
- `"Australia/Sydney"` - Sydney Time
};
```

#### Social Media Links
```javascript
const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/yourusername", // ← Your GitHub
  },
  {
    name: "LinkedIn", 
    icon: "linkedin",
    link: "https://www.linkedin.com/in/yourusername/", // ← Your LinkedIn
  },
  // Add more social links as needed
];
```

#### Homepage Content
```javascript
const home = {
  headline: <>Your compelling headline here</>, // ← Your tagline
  subline: (
    <>
      I'm {person.firstName}, a {person.role} based in {person.location}. 
      {/* Customize this description */}
    </>
  ),
};
```

#### About Page
- **Introduction**: Update the description in the `intro` section
- **Work Experience**: Replace with your actual work history
- **Education**: Update with your studies and certifications
- **Technical Skills**: Add your skills and expertise

### 2. Replace Images

#### Required Images:
- **Avatar**: `public/images/avatar.jpg` (your profile photo)
- **Hero Image**: `public/images/og/home.jpg` (homepage background)
- **Project Images**: Add your project screenshots to `public/images/projects/`
- **Gallery Images**: Replace images in `public/images/gallery/` with your own photos

#### Image Guidelines:
- Avatar: Square format, recommended 400x400px
- Hero image: Landscape format, recommended 1200x630px
- Project images: Any format, maintain aspect ratios
- Gallery images: Mix of horizontal and vertical orientations

### 3. Add Your Projects

Create new project files in `src/app/work/projects/`:

```mdx
---
title: "Your Project Title"
publishedAt: "2024-01-15"
summary: "Brief description of your project"
images:
  - "/images/projects/your-project/cover.jpg"
  - "/images/projects/your-project/screenshot-1.jpg"
team:
  - name: "Your Name"
    role: "Your Role"
    avatar: "/images/avatar.jpg"
    linkedIn: "https://www.linkedin.com/in/yourusername/"
---

## Overview

Detailed description of your project.

## Key Features

- Feature 1
- Feature 2
- Feature 3

## Technologies Used

- Technology 1
- Technology 2
- Technology 3

## Challenges and Learnings

What you learned and challenges you overcame.

## Outcome

Results and impact of your project.
```

### 4. Customize Styling (`src/resources/once-ui.config.js`)

#### Domain & SEO
```javascript
const baseURL = "https://your-domain.com"; // ← Your domain
```

#### Schema Data
```javascript
const schema = {
  name: "Your Name", // ← Your name
  email: "your.email@example.com", // ← Your email
  type: "Person", // ← Keep as "Person" for personal portfolio
};
```

#### Visual Customization
```javascript
const style = {
  theme: "system", // dark | light | system
  neutral: "gray", // sand | gray | slate | custom
  brand: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom
  accent: "red", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom
  // ... more options
};
```

### 5. Add Blog Posts (Optional)

Create blog posts in `src/app/blog/posts/`:

```mdx
---
title: "Your Blog Post Title"
publishedAt: "2024-01-15"
summary: "Brief summary of your post"
---

Your blog content here...
```

### 6. Update Package Information

Edit `package.json`:
```json
{
  "name": "your-portfolio-name",
  "version": "1.0.0",
  // ... rest of the file
}
```

## 🎨 Design Customization Options

### Color Themes
You can change the color scheme by modifying the `style` object in `once-ui.config.js`:

- **Brand Colors**: `brand` and `accent` properties
- **Neutral Colors**: `neutral` property  
- **Theme**: `theme` property for dark/light mode

### Layout Options
- **Routes**: Enable/disable pages in the `routes` object
- **Sections**: Show/hide sections in the `display` properties
- **Effects**: Customize visual effects like dots, gradients, etc.

## 📱 Pages to Customize

1. **Home** (`/`) - Main landing page
2. **About** (`/about`) - Your background and experience
3. **Work** (`/work`) - Your projects
4. **Blog** (`/blog`) - Your writing (optional)
5. **Gallery** (`/gallery`) - Your photos (optional)

## 🚀 Deployment

After customization:

1. **Test locally**: `npm run dev`
2. **Build**: `npm run build`
3. **Deploy**: Use Vercel, Netlify, or your preferred hosting

## 📋 Checklist

- [ ] Update personal information in `content.js`
- [ ] Replace avatar and hero images
- [ ] Add your social media links
- [ ] Update work experience and education
- [ ] Add your technical skills
- [ ] Create your project files
- [ ] Update domain in `once-ui.config.js`
- [ ] Customize colors and styling (optional)
- [ ] Add blog posts (optional)
- [ ] Replace gallery images (optional)
- [ ] Test all pages locally
- [ ] Deploy to your domain

## 🆘 Need Help?

- Check the [Once UI documentation](https://docs.once-ui.com)
- Review the original [Magic Portfolio docs](https://docs.once-ui.com/docs/magic-portfolio/quick-start)
- The code is well-commented to guide you through customization

Happy customizing! 🎉 