// import { Frame, Navigation } from "@shopify/polaris";
// import { HomeMinor, OrdersMinor, ProductsMinor } from "@shopify/polaris-icons";
// import React from "react";

// function NavigationExample() {
//   return (
//     <Frame>
//       <Navigation location="/">
//         <Navigation.Section
//           items={[
//             {
//               url: "#",
//               label: "Home",
//               icon: HomeMinor,
//             },
//             {
//               url: "#",
//               excludePaths: ["#"],
//               label: "Orders",
//               icon: OrdersMinor,
//               badge: "15",
//             },
//             {
//               url: "#",
//               excludePaths: ["#"],
//               label: "Products",
//               icon: ProductsMinor,
//             },
//           ]}
//         />
//       </Navigation>
//     </Frame>
//   );
// }

// export default NavigationExample;

import { Frame, Navigation } from "@shopify/polaris";
import {
  HomeMinor,
  OrdersMinor,
  CirclePlusOutlineMinor,
  ProductsMinor,
  CustomersMinor,
  MarketingMinor,
  OnlineStoreMinor,
  PlusMinor,
  ViewMinor,
} from "@shopify/polaris-icons";
import { FaShopify } from "react-icons/fa";
import React, { useState } from "react";
import {
  ProductsMajor,
  CustomersMajor,
  ContentMinor,
  AnalyticsMinor,
  MarketingMajor,
  DiscountsMajor,
  StoreMajor,
  ChevronRightMinor,
} from "@shopify/polaris-icons";
function NavigationExample() {
  const location = typeof window !== "undefined" ? window.location.href : "";

  const [isopen1, setisopen1] = useState(false);
  const [isopen2, setisopen2] = useState(false);
  const [isopen3, setisopen3] = useState(false);
  const [isopen4, setisopen4] = useState(false);
  const [isopen5, setisopen5] = useState(false);
  const [isopen6, setisopen6] = useState(false);
  const [isopen7, setisopen7] = useState(false);
  const [isopen8, setisopen8] = useState(false);

  const opens1 = () => {
    setisopen1(!isopen1);
    setisopen2(false);
    setisopen3(false);
    setisopen5(false);
    setisopen6(false);
    setisopen4(false);
    setisopen7(false);
    setisopen8(false);
  };

  const opens2 = () => {
    setisopen1(false);
    setisopen2(!isopen2);
    setisopen3(false);
    setisopen5(false);
    setisopen6(false);
    setisopen4(false);
    setisopen7(false);
    setisopen8(false);
  };

  const opens3 = () => {
    setisopen3(!isopen3);
    setisopen1(false);
    setisopen2(false);
    setisopen4(false);
    setisopen5(false);
    setisopen6(false);
    setisopen7(false);
    setisopen8(false);
  };

  const opens4 = () => {
    setisopen1(false);
    setisopen2(false);
    setisopen3(false);
    setisopen4(!isopen4);
    setisopen5(false);
    setisopen6(false);
    setisopen7(false);
    setisopen8(false);
  };

  const opens5 = () => {
    setisopen1(false);
    setisopen2(false);
    setisopen3(false);
    setisopen4(false);
    setisopen5(!isopen5);
    setisopen6(false);
    setisopen7(false);
    setisopen8(false);
  };

  const opens6 = () => {
    setisopen1(false);
    setisopen2(false);
    setisopen3(false);
    setisopen4(false);
    setisopen5(false);
    setisopen6(!isopen6);
    setisopen7(false);
    setisopen8(false);
  };
  const opens7 = () => {
    setisopen1(false);
    setisopen2(false);
    setisopen3(false);
    setisopen4(false);
    setisopen5(false);
    setisopen6(false);
    setisopen7(!isopen7);
    setisopen8(false);
  };
  const opens8 = () => {
    setisopen1(false);
    setisopen2(false);
    setisopen3(false);
    setisopen4(false);
    setisopen5(false);
    setisopen6(false);
    setisopen7(false);
    setisopen8(!isopen8);
  };

  return (
    <Frame>
      <Navigation location="/">
        <Navigation.Section
          items={[
            {
              url: "#",
              excludePaths: ["#"],
              label: "Home",
              selected: isopen7,
              onClick: opens7,
              icon: HomeMinor,
            },
            {
              url: "#",

              label: "Orders",
              selected: isopen1,
              icon: OrdersMinor,
              onClick: opens1,
              subNavigationItems: isopen1
                ? [
                    {
                      url: location,
                      disabled: false,
                      label: "Drafts",
                    },
                    {
                      url: "#",
                      excludePaths: ["#"],
                      disabled: false,
                      label: "Abandoned checkouts",
                    },
                  ]
                : [],
            },

            {
              url: "#",

              label: "Product",
              icon: ProductsMajor,
              selected: isopen2,
              onClick: opens2,
              subNavigationItems: isopen2
                ? [
                    {
                      url: location,
                      disabled: false,
                      label: "Collections",
                    },
                    {
                      url: "#",
                      excludePaths: ["#"],
                      disabled: false,
                      label: "Inventory",
                    },
                    {
                      url: "#",
                      excludePaths: ["#"],
                      disabled: false,
                      label: "Purchase orders",
                    },
                    {
                      url: "#",
                      excludePaths: ["#"],
                      disabled: false,
                      label: "Transfers",
                    },
                    {
                      url: "#",
                      excludePaths: ["#"],
                      disabled: false,
                      label: "Gift cards",
                    },
                  ]
                : [],
            },
            {
              url: "#",
              label: "Customers",

              icon: CustomersMajor,
              selected: isopen3,
              onClick: opens3,
              subNavigationItems: isopen3
                ? [
                    {
                      url: location,
                      // disabled: false,
                      label: "segments",
                    },
                  ]
                : [],
            },
            {
              url: "#",

              label: "Content",
              // badge: "Old",
              icon: ContentMinor,
              selected: isopen4,
              onClick: opens4,
              subNavigationItems: isopen4
                ? [
                    {
                      url: location,
                      // disabled: false,
                      label: "Metaobjects",
                    },
                    {
                      url: location,
                      // disabled: false,
                      label: "Files",
                    },
                  ]
                : [],
            },
            {
              url: "#",
              label: "Analytics",
              icon: AnalyticsMinor,

              selected: isopen5,
              onClick: opens5,
              subNavigationItems: isopen5
                ? [
                    {
                      url: location,
                      // disabled: false,
                      label: "Reports",
                    },
                    {
                      url: location,
                      // disabled: false,
                      label: "Live View",
                    },
                  ]
                : [],
            },

            {
              url: location,
              label: "Marketing",
              icon: MarketingMajor,
              selected: isopen6,
              onClick: opens6,
              subNavigationItems: isopen6
                ? [
                    {
                      url: location,
                      // disabled: false,
                      label: "Campaigns",
                    },
                    {
                      url: location,
                      // disabled: false,
                      label: "Automations",
                    },
                  ]
                : [],
              // subNavigationItems: [
              //   {
              //     url: location,
              //     disabled: false,
              //     label: "Selected sub item",
              //   },
              //   {
              //     url: "#",
              //     excludePaths: ["#"],
              //     disabled: false,
              //     label: "Default sub item",
              //   },
              //   {
              //     url: "#",
              //     excludePaths: ["#"],
              //     disabled: true,
              //     label: "Disabled sub item",
              //   },
              // ],
            },
            {
              url: "#",
              excludePaths: ["#"],
              label: "Discounts",
              icon: DiscountsMajor,
              disabled: false,
              selected: isopen8,
              onClick: opens8,
            },

            // {
            //   url: "#",
            //   label: "Overflow item",
            //   icon: MarketingMinor,
            // },
          ]}
          // rollup={{
          //   after: 7,
          //   view: "view",
          //   hide: "hide",
          //   activePath: "/",
          // }}
        />
        <Navigation.Section
          title="Sales channels"
          items={[
            {
              url: "#",
              excludePaths: ["#"],
              icon: StoreMajor,
              label: "Icon as svg",
              secondaryAction: {
                icon: ViewMinor,
              },
            },
            {
              url: "#",
              excludePaths: ["#"],
              icon: FaShopify,
              label: "Point of Sale",
              secondaryAction: {},
            },
          ]}
          action={{
            accessibilityLabel: "Add sales channel",
            icon: ChevronRightMinor,
            onClick: () => {},
          }}
          separator
        />

        <Navigation.Section
          title="Apps"
          items={[
            {
              url: location,
              disabled: false,
              label: "Add apps",
            },
            {
              subNavigationItems: [
                {
                  url: location,
                  // disabled: false,
                  label: "segments",
                  icon: PlusMinor,
                },
              ],
            },
          ]}
          action={{
            accessibilityLabel: "Add sales channel",
            icon: ChevronRightMinor,
            onClick: () => {},
          }}
          separator
        />
      </Navigation>
    </Frame>
  );
}

export default NavigationExample;
