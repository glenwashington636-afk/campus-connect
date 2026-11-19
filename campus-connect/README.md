# Campus-Connect

A university course information website focused on accessibility. Built with plain HTML, CSS and JavaScript, with no build step or dependencies.

## Features

- **Course finder:** search by code, title or instructor, and filter by department, year level and delivery mode.
- **Accessibility first:** skip link, semantic landmarks, visible focus, live-region result announcements, and WCAG AA contrast.
- **Reader settings:** text size (3 steps) and light/dark theme, saved in `localStorage`.
- **Responsive navigation:** collapses to a menu on small screens and closes with `Esc`.
- **Reduced motion:** respects `prefers-reduced-motion`.

## Structure

```
campus-connect/
├── index.html
├── courses.html
├── accessibility.html
├── css/styles.css
└── js/
    ├── main.js       # theme, text size, navigation
    ├── data.js       # course catalogue (edit this to add courses)
    └── courses.js    # search and filtering
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

Then visit http://localhost:8000.

## Add a course

Append an object to the `COURSES` array in `js/data.js`. Keep `level` as a number (1 to 3) and `mode` as `In person`, `Online` or `Hybrid`.

## Publish with GitHub Pages

Repository **Settings → Pages → Build and deployment**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, then save.

## Creating this repository with GitHub Desktop

1. **Install and sign in.** Download GitHub Desktop from https://desktop.github.com, then use **File → Options → Accounts** (Windows) or **GitHub Desktop → Settings → Accounts** (macOS) to sign in.
2. **Unzip the project.** Extract `campus-connect.zip` somewhere permanent, such as `Documents/GitHub/campus-connect`.
3. **Create the local repository.** Choose **File → Add local repository…**, then **Choose…** and select the `campus-connect` folder. GitHub Desktop will say it is not a Git repository. Click **create a repository**.
4. **Fill in the details.** Name: `campus-connect`. Description: `Accessible university course website`. Leave *Initialize this repository with a README* unchecked because one already exists. Git ignore: *None* (a `.gitignore` is included). Click **Create repository**.
5. **Make the first commit.** In the **Changes** tab all files are listed and ticked. Enter the summary `Initial commit: Campus-Connect site` and click **Commit to main**.
6. **Publish to GitHub.** Click **Publish repository** in the top bar. Keep the name `campus-connect`, untick *Keep this code private* if you want to use GitHub Pages on a free account, and click **Publish repository**.
7. **Verify.** Choose **Repository → View on GitHub** to confirm the files are online.

### Everyday workflow

1. Edit files in your editor.
2. Return to GitHub Desktop and review the diff in **Changes**.
3. Write a short commit summary and click **Commit to main**.
4. Click **Push origin** to upload.

For larger changes, use **Current Branch → New Branch**, commit there, then **Create Pull Request** after pushing.
