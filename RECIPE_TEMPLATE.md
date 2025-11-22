# Recipe Template

Copy this template to create new recipes:

```markdown
---
title: Recipe Title Here
slug: recipe-url-slug
date: 2024-11-12T10:00:00.000Z
description: A short, compelling description of your recipe for SEO and preview cards. Keep it under 160 characters for best results.
category: Main Course
image: /images/recipe-name.jpg
prepTime: 15 minutes
cookTime: 30 minutes
servings: 4
ingredients:
  - 2 cups all-purpose flour
  - 1 cup sugar
  - 3 large eggs
  - 1 tsp vanilla extract
  - 1/2 cup butter, softened
---

## Instructions

### Step 1: Prepare Ingredients
Start by preparing all your ingredients. This makes the cooking process much smoother.

### Step 2: Mix Dry Ingredients
In a large bowl, combine the flour, sugar, and other dry ingredients.

### Step 3: Add Wet Ingredients
Add the eggs, vanilla, and butter to the mixture.

### Step 4: Cook
[Detailed cooking instructions here]

### Step 5: Serve
Serve immediately and enjoy!

## Tips

- Tip 1: Use room temperature ingredients for best results
- Tip 2: Don't overmix the batter
- Tip 3: Store leftovers in an airtight container

## Variations

- Add chocolate chips for extra sweetness
- Substitute almond flour for a gluten-free version
- Try different spices for unique flavors
```

## Front Matter Fields Reference

### Required Fields

| Field | Type | Example | Description |
|-------|------|---------|-------------|
| `title` | string | `"Chocolate Chip Cookies"` | Recipe name |
| `slug` | string | `"chocolate-chip-cookies"` | URL-friendly identifier (use lowercase and hyphens) |
| `date` | ISO string | `"2024-11-12T10:00:00.000Z"` | Publication date |
| `description` | string | `"Soft, chewy cookies..."` | Short summary (150-160 chars) |
| `category` | string | `"Desserts"` | Recipe category |
| `ingredients` | array | See template | List of ingredients with quantities |

### Optional Fields

| Field | Type | Example | Description |
|-------|------|---------|-------------|
| `image` | string | `"/images/cookies.jpg"` | Path to recipe image |
| `prepTime` | string | `"15 minutes"` | Preparation time |
| `cookTime` | string | `"30 minutes"` | Cooking time |
| `servings` | number | `4` | Number of servings |

## Categories

Use one of these categories for consistency:
- `Breakfast`
- `Lunch`
- `Main Course`
- `Desserts`
- `Salads`
- `Appetizers`
- `Soups`
- `Beverages`
- `Snacks`
- `Side Dishes`

You can add new categories - they'll automatically appear in the navigation!

## Tips for Great Recipes

### Writing Instructions
- Use numbered steps or clear headings
- Be specific with measurements and times
- Include visual cues (e.g., "until golden brown")
- Mention what the result should look/smell like

### Ingredients List
- Start with quantity, then ingredient name
- Be specific (e.g., "2 cups all-purpose flour" not "flour")
- List in order of use when possible
- Group related ingredients if helpful

### Images
- Use high-quality, well-lit photos
- Show the finished dish
- Recommended size: 1200x800px or similar ratio
- Use WebP or JPEG format
- Optimize file size for web

### SEO Tips
- Use descriptive titles
- Write compelling descriptions
- Include relevant keywords naturally
- Add cooking time and servings
- Use clear, step-by-step instructions

## Example Recipes

Check out these sample recipes in the `content/recipes/` folder:
1. `chocolate-chip-cookies.md` - Dessert example
2. `creamy-tomato-pasta.md` - Main course example
3. `greek-salad.md` - Salad example
4. `banana-bread.md` - Breakfast example
5. `chicken-stir-fry.md` - Stir fry example

## Date Format

Always use ISO 8601 format for dates:
```
2024-11-12T10:00:00.000Z
```

Generate in JavaScript:
```javascript
new Date().toISOString()
```

## File Naming

- Use lowercase letters
- Replace spaces with hyphens
- Match the slug field
- Example: `chocolate-chip-cookies.md`

## Common Mistakes to Avoid

❌ **Don't:**
- Forget the three dashes (`---`) around front matter
- Use quotes around ingredient list items
- Use special characters in slugs
- Forget to add ingredients
- Use relative dates ("yesterday")

✅ **Do:**
- Use proper YAML formatting
- Keep slugs URL-friendly
- Use ISO dates
- Include all required fields
- Test your recipe before publishing

## Testing Your Recipe

1. Save the markdown file
2. Restart the dev server (if needed)
3. Check homepage - recipe should appear
4. Click the recipe card
5. Verify all fields display correctly
6. Test on mobile view

---

Happy recipe writing! 🍳
