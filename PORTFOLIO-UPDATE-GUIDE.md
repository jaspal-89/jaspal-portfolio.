# Jaspal Portfolio — Update Guide

The portfolio intentionally keeps the original premium UI/animation architecture but uses an image-free visual system.

## Add or update projects

Edit:

`src/db/projects.ts`

Each project supports:

- `video_title` — project name
- `video_description` — short explanation
- `tags` — searchable project tags
- `publish_date` — sorting date
- `client_name` — client/brand name
- `video_link` — YouTube or YouTube Shorts URL
- `category` — one or more of:
  - Clean Edits
  - Captions
  - UGC Ads
  - Faceless
  - Promotional
  - Motion Graphics
  - AI Video
- `software_used` — tools used for the project

No project image is required. Leave `project_images` empty.

## Personal details

- Main branding: `JASPAL`
- Title: `Video Editor & Creative Producer`
- Email: `gamerolast47@gmail.com`
- Phone / WhatsApp: `+91 93176 21164`
- Location: `Bilaspur, Himachal Pradesh, India`

## Skills

Edit `src/app/skills/page.tsx`.

## Services

Edit the `services` array in `src/app/page.tsx`.

## Colors

The design uses a deep black background, white typography and controlled red accents. Avoid yellow.

## Important

Do not add employment-status badges or an Education section. The site is a creative portfolio focused on Work and Skills.
