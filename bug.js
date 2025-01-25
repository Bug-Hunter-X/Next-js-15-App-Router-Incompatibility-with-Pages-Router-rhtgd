```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a sample paragraph.</p>
    </div>
  );
}
```
This code will throw an error in Next.js 15 if you try to use it as the main index page. The issue is that Next.js 15 requires App Router instead of Pages Router.  If you are trying to use Pages Router, you need to move the code to the pages directory, and it won't be compatible with the App Router.  The solution involves switching to the App Router, or keeping Pages Router and making the changes accordingly.