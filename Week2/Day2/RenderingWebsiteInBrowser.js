How does the browser render a website?

-->The browser renders the web page after fetching and analyzing HTML, CSS, JS files. It will build the HTML DOM tree and the CSS DOM tree after that.
-->The browser parses the HTML DOM tree and the CSS DOM tree to build the layout tree on the next step. The layout tree stores information like geometries and styles.
-->The browser parses the layout tree to create many layers in the painting phase. Then it will composite the layers to pixels on the screen.
-->When the user interacts with the page, the browser will be the trigger to reflow or repaint. It depends on the type of interactions.


Phases
1. Parsing:
    -->The HTML parser parses HTML and constructs the structure called DOM (Document Object Model) tree.
    -->The main thread will request for sub-resources if when parsing <link>, <img>, <script>.
    -->We should fetch CSS files (in the <head>) before fetching JS files. Sometimes JS files will manipulate the CSS DOM tree.
        a.Fetch re-sources (CSS, JS files): prefetch, preload, dns-prefetch, browser’s cache.
        b.Fetch and execute re-sources (JS files).
        c.Fetch JS files asynchronously: aync, defer.
        d.Summary: The order of fetching resources.
        e.Using JS modules in the browser (module): module, CORS.
2. Style calculation (and recalculate styles):
      -->The main thread parses HTML DOM and CSS file then computes style. Generate CSS DOM.
      -->The recalculation: the inline styles will override CSS DOM’s style
      -->The information stores in computed tab
         a.The order of CSS (Cascading Style Sheets):
                -->The priority is ID (#), class (.) , li , ul li
                -->Use the latest one if there is conflicts
         b.Use Media query to improve the performance: 
          -->The browser will check Media query before apply CSS styles.
          
3. Layout:
      -->The main thread parses HTML DOM and CSS DOM to generate the layout tree. The layout tree has information like the size, shape, and location of all visible HTML nodes.
      -->In the phase, elements are only represented as vector boxes.
4. Paint:
      -->The main thread walks through the layout tree to create paint records. Paint record is a note of the painting process like background first, then text, then rectangle.
      -->In the phase, the main thread determines the order (z-index) and put vector boxes on layers.
5. Compositing:
      -->The main thread turn layers information into pixels on the screen (rasterizing). If the user scrolls the page, the main thread will composite a new frame.
      -->The browser stored information in the layer panel.
6. Reflows:
      -->The phase will happen when we force the browser to do the following things.
      1.Changes for CSS properties
      Recalculate size (e.g., width, height), display (e.g., float), or position
      Animating the element’s size or position
      2. JavaScript operations
      Appending an element to the document (e.g., operate to DOM)
      Get the CSS properties of elements (e.g., scrollTop)
      3. Users interactions
      Adjust the window’s size
      Reflows is a costly process. It also triggers layout, paint, compositing.
7. Repaint:
    -->Repaint only affects elements that are on the same layer as the changed node.
    -->The phase will happen when we force the browser to do the following things.
    -->Change CSS properties like background-color, cursor, visibility, etc
    -->Repaints are also a costly process. It will trigger paint and compositing you can check CSS triggers from there.
