import React from "react";

// Sidebar component definition
const Sidebar = () => {
  return (
    // Main container for the sidebar with fixed positioning and responsive styles
    <aside className="border-grid  fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
      {/* Scrollable content area with padding */}
      <div className="no-scrollbar h-full overflow-auto py-6 pr-4 lg:py-8">
        {/* Vertical layout for sidebar sections */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h4 className="rounded-md px-2 py-1 text-sm font-medium">
              Getting Started
            </h4>

            <div className="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
              {/* Individual link with hover effects */}
              <a
                className="group relative flex h-8 w-full items-center rounded-lg px-2 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-accent hover:text-accent-foreground font-normal text-foreground"
                href=""
              >
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
