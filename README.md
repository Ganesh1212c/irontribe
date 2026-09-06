# Iron Tribe Gym — Website

Plain HTML/CSS/JS site with six tabs (Home, About, Programs, Gallery, Membership, Contact) switched by JavaScript on a single page — no build tools, no framework.

## Files
```
index.html      structure and content for all six tabs
style.css       black-and-yellow design system
script.js       tab switching, mobile menu, gallery lightbox, contact form
images/         the 7 gym photos you shared, renamed by what's in them
```

## Before you publish — fill these in
The site works right now, but a few facts need to come from the gym owner interview (Step 2 of the assignment) rather than from photos alone:

- [ ] **Contact tab** — street address, phone number, email, opening hours, Instagram handle (each is marked `[Add ...]` in `index.html`)
- [ ] **Membership tab** — the pricing shown (₹1,999 / ₹4,999 / ₹16,999) is a placeholder example. Replace with real plans and prices.
- [ ] **Programs tab** — confirm whether personal training and group sessions are actually offered, and by whom.
- [ ] Double-check the embedded map pin matches the exact branch you're featuring (Google Maps lists more than one gym under similar names in Bengaluru) — open the "Open In Google Maps" button on the Contact tab to verify.

## Hosting on GitHub Pages
1. Create a new GitHub repository (e.g. `iron-tribe-website`).
2. Upload `index.html`, `style.css`, `script.js`, and the `images/` folder, keeping this same structure.
3. Go to the repo's **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`.
5. Save — GitHub gives you a live URL in a minute or two (`https://<username>.github.io/iron-tribe-website/`).

## Notes on the contact form
There's no backend, so "Send Message" opens the visitor's own email app with the message pre-filled, rather than submitting anywhere silently. That's a normal, honest pattern for a static site — just make sure the `[Add email address]` field on the Contact tab is filled in so people know who they're mailing.
