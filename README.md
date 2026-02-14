# Day & Night | Personal Portfolio

A personal portfolio website built with vanilla HTML, CSS, and JavaScript for the DevSoc UNSW trainee application. The site embraces the **Day and Night** theme through an interactive toggle that switches between warm daylight and cool nighttime aesthetics.

## Features

- **Day/Night theme toggle** – Click the button in the top-right to switch themes
- **Theme persistence** – Your preference is saved and respected on system dark mode
- **Basketball theme** – Subtle hoops-inspired accents (your favourite sport)
- **Favourite Players page** – Dedicated page for your top players (linked from Interests)
- **Sections:** About (name, age, degree), Interests (with photos)
- **Smooth animations** – Cards reveal on scroll, hover effects

## Customisation

1. **Your info:** Edit `index.html` – update the hero name, tagline, and the About cards with your name, age, and degree.
2. **Interests:** Replace the interest titles and descriptions. Basketball is included as an interest. To use your own photos:
   - Add images to the `images/` folder
   - Update the `src` in each interest card's `<img>` tag to point to your file (e.g. `images/coding.jpg`)
3. **Favourite Players:** Edit `favourite-players.html` to add your favourite basketball players—names, positions, teams, and photos.

## Hosting on GitHub Pages

1. Push this repository to your GitHub account.
2. Go to **Settings** → **Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder.
5. Click **Save**. Your site will be live at `https://<username>.github.io/<repo-name>/`

## Tech Stack

- HTML5  
- CSS3 (custom properties, Flexbox, Grid)  
- Vanilla JavaScript  

No frameworks or libraries.
