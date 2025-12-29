# Deployment Guide for Prathmesh Enterprises Website

## 🚀 Quick Deployment to Vercel

Follow these steps to deploy your website to Vercel (the best platform for Next.js).

### Phase 1: Prepare your Code (Git)

Since you haven't set up Git yet, run these commands in your VS Code terminal:

1.  **Initialize Git**:
    ```bash
    git init
    ```

2.  **Add all files**:
    ```bash
    git add .
    ```

3.  **Commit your changes**:
    ```bash
    git commit -m "Initial commit - Complete Website"
    ```

### Phase 2: Push to GitHub (Recommended)

1.  Go to [GitHub.com](https://github.com) and create a **New Repository**.
2.  Name it `prathmesh-enterprises`.
3.  **Do not** initialize with README/gitignore (you already have them).
4.  Copy the commands under "…or push an existing repository from the command line". They will look like this:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/prathmesh-enterprises.git
    git branch -M main
    git push -u origin main
    ```
5.  Run those commands in your terminal.

### Phase 3: Deploy on Vercel

1.  Go to [Vercel.com](https://vercel.com/signup) and Sign Up (continue with GitHub).
2.  On your dashboard, click **"Add New..."** -> **"Project"**.
3.  You will see your `prathmesh-enterprises` repository. Click **Import**.
4.  **Configure Project**:
    - **Framework Preset**: Next.js (will be auto-detected).
    - **Root Directory**: `./` (default).
    - **Environment Variables**: Leave empty for now (unless you added EmailJS keys).
5.  Click **Deploy**.

### Phase 4: Verification

- Vercel will build your site (takes ~1 minute).
- Once done, you will get a live URL (e.g., `prathmesh-enterprises.vercel.app`).
- Test the live site on your mobile phone to ensure everything looks proficient!

---

## 🛠 Troubleshooting

- **Build Fails?** Check the "Logs" tab in Vercel. 
- **Styles missing?** Ensure `npm run build` works locally (we already verified this!).
- **Images broken?** Make sure all images are in `public/` or valid external URLs.
