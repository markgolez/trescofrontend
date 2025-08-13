# Website Context: Multi-Feature Platform

---

## **UI/UX Design Specifications**
### **1. Navigation Structure**
#### **Navbar (Top Fixed Bar)**
- **Left Section**:
  - Logo (links to Home).
- **Center Section**:
  - Links: `Home` | `Dashboard` | `Wallet` | `UserProfile` (dropdown with settings).
- **Right Section**:
  - `Login/Logout` button (dynamic based on auth state).
- **Design**:
  - Dark background with light text (or vice versa for minimalism).
  - Hover effects on buttons (subtle underline or color shift).

#### **Collapsible Left Sidebar (Vertical)**
- **Icons + Labels** (collapses to icons-only):
  - `Momentos` (social feed) 
  - `Services` (service marketplace)
  - `Marketplace` (product marketplace)
  - `Postings` (request board)
- **Behavior**:
  - Expands on hover if collapsed.
  - Active section highlighted (bold/color accent).

---

### **2. Main Area Layout (Dynamic per Page)**
#### **A. Momentos (Social Feed)**
- **Main Area**:
  - **Posts Grid**: Cards with media (images/videos) + text.
  - **Categories**: Filter tabs (`Entertainment`, `Political`, `Educational`).
  - **Political Posts**: Reactions as badges (`Agree`, `Disagree`, `Misleading`).
  - **No Right Sidebar** (maximizes content space).

#### **B. Services**
- **Main Area**:
  - **Filters** (sticky top bar):
    - Category dropdown (e.g., "Cleaning", "Tutoring").
    - Type toggle (e.g., "Remote", "In-Person").
    - Sort: `Price (Low-High)`, `Date (Newest)`, `Rating`.
  - **Service Cards**: Image, title, price, short desc, "Book Now" button.
- **Right Sidebar** (updates on click):
  - **Service Details**:
    - Full description, provider profile link, pricing tiers.
    - **Ratings Breakdown**: Stars per category (e.g., "Professionalism: ★★★★☆").

#### **C. Marketplace (Products)**
- **Main Area**:
  - Identical filter/sort UI to *Services*.
  - **Product Cards**: Image gallery slider, price, "Add to Cart" button.
- **Right Sidebar** (on selection):
  - **Product Details**:
    - Specifications, seller info, shipping options.
    - **Review Highlights**: "Most helpful" review snippet.

#### **D. Postings (Request Board)**
- **Main Area**:
  - **User Posts**: "Need a plumber for..." with tags (e.g., `Urgent`, `Service`).
  - **Bid Privately**: Button to submit bid (only poster sees bids).
- **Right Sidebar**:
  - **Poster Stats**:
    - Success rate (e.g., "80% of requests fulfilled").
    - Avg. bid range (if historical data exists).

#### **E. Dashboard**
- **3-Column Layout**:
  1. **Transactions**: Table with date, amount, status.
  2. **Listings**: Active products/services (edit/delete buttons).
  3. **Stats Widgets**: 
     - Earnings graph (7/30 days).
     - Rating trends (e.g., "Avg. ★★★★☆ this month").

#### **F. Wallet**
- **Card-Based Layout**:
  - **Balance Summary**: Large font, "Deposit/Withdraw" buttons.
  - **Transaction History**: Filter by date/type (e.g., "Service Payment").
  - **Security Status**: 2FA toggle, last login IP.

---

### **3. Interaction Design**
- **Collapsible Logic**:
  - Sidebar remembers state (localStorage).
  - Smooth animations (250ms ease-in-out).
- **Filters**:
  - Apply instantly (no "Submit" button needed).
  - URL updates for shareable links (e.g., `?sort=price_asc`).
- **Right Sidebar**:
  - Slides in/out on mobile (swipe gesture).
  - Sticky scroll for long content.

---

### **4. Visual Hierarchy**
- **Typography**:
  - Headings: `Inter Bold` (clean sans-serif).
  - Body: `Inter Regular` (16px, 1.5 line height).
- **Colors**:
  <!-- - Primary: `#4F46E5` (indigo, for buttons). -->
  - Neutral: `#F9FAFB` (light bg), `#1F2937` (dark text).
  - Accents: Green (success), Red (errors/warnings).
- **Shadows/Elevation**:
  - Cards: subtle `box-shadow: 0 2px 4px rgba(0,0,0,0.1)`.

---

### **5. Responsive Rules**
- **Mobile (<=768px)**:
  - Navbar condenses to hamburger menu.
  - Sidebar becomes full-screen overlay.
  - Right sidebar stacks below main content.
- **Desktop (>=1200px)**:
  - Max-width container (1440px) for readability.
