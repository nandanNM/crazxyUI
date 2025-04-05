import React from "react";

// Navbar component definition
const Navbar = () => {
  return (
    // Header element with styling for sticky positioning, background, and blur effects
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        {/* Main container for the navbar content */}
        <div className="container flex h-14 items-center gap-2 md:gap-4">
          <div className="mr-4 hidden md:flex">
            {/* Brand or logo text */}
            <p>CrazxyUI</p>
            {/* Navigation menu */}
            <nav className="flex items-center gap-4 text-sm xl:gap-6">
              {/* Navigation link for "Docs" */}
              <p className="transition-colors hover:text-foreground/80 text-foreground/80">
                Docs
              </p>
              <p>Components</p>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

// Exporting the Navbar component for use in other parts of the application
export default Navbar;
