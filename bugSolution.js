```javascript
// app/page.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app (App Router)</h1>
      <p>This is a sample paragraph.</p>
    </div>
  );
}
```
This solution uses the App Router, which is the recommended approach for Next.js 15. The `app/page.js` file is the new entry point for the home page.  The file structure is changed to fit the App Router paradigm.  To use Pages Router, keep the file in `pages/index.js` but be aware that it is officially deprecated.