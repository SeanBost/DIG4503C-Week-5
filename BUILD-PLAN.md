Claude initially provided a four step plan. I asked it to break things down further and it shared what's below

**********

Here's the revised 5-step breakdown:

Step 1 — Expand form state and fields
Swap the single name state for a { firstName, lastName, jobTitle, hometown } object. Add the 3 new inputs.
Test: all 4 inputs work without errors.

Step 2 — Add a submit toggle
Add a submitted boolean. Flip it on submit; show a placeholder div and an Edit button to return to the form.
Test: submit/edit flow works; data is preserved.

Step 3 — Display submitted info as plain text
Replace the placeholder with a simple unstyled readout of all 4 values (e.g. <p>First Name: Jane</p>).
Test: all 4 submitted values appear correctly on screen.

Step 4 — Build the Nametag card layout
Restructure the plain text into a proper hierarchy — "Hello, my name is" header, full name large, title/hometown below. No styling yet, just structure.
Test: layout hierarchy and data placement is correct.

Step 5 — Style the Nametag
Add styles for a badge-like card — colored header band, large name, bordered container.
Test: visually resembles a nametag.

The plain-text step is a good safety net — it confirms the data wiring is correct before any layout complexity is introduced. Ready to start on Step 1?