import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cards = [
    {
      category : "Free",
      price: "$0",
      user: {
        data: "Single User",
        available: true
      },
      storage: {
        data: "5GB Storage",
        available: true
      },
      projects1: {
        data: "Unlimited Public Projects",
        available: true
      },
      access: {
        data: "Community Access",
        available: true
      },
      projects2: {
        data: "Unlimited Private Projects",
        available: false
      },
      phSupport: {
        data: "Dedicated Phone Support",
        available: false
      },
      subDomain: {
        data: "Free Subdomain",
        available: false
      },
      report: {
        data: "Monthly Status Reports",
        available: false}
    },
    {
      category:"Plus",
      price: "$9",
      user: {
        data: "5 Users",
        available: true
      },
      storage: {
        data: "50GB Storage",
        available: true
      },
      projects1: {
        data: "Unlimited Public Projects",
        available: true
      },
      access: {
        data: "Community Access",
        available: true
      },
      projects2: {
        data: "Unlimited Private Projects",
        available: true
      },
      phSupport: {
        data: "Dedicated Phone Support",
        available: true
      },
      subDomain: {
        data: "Free Subdomain",
        available: true
      },
      report: {
        data: "Monthly Status Reports",
        available: false
      }
    },
    {
      category: "Pro",
      price: "$49",
      user: {
        data: "Unlimited Users",
        available: true
      },
      storage: {
        data: "150GB Storage",
        available: true
      },
      projects1: {
        data: "Unlimited Public Projects",
        available: true
      },
      access: {
        data: "Community Access",
        available: true
      },
      projects2: {
        data: "Unlimited Private Projects",
        available: true
      },
      phSupport: {
        data: "Dedicated Phone Support",
        available: true
      },
      subDomain: {
        data: "Unlimited Free Subdomains",
        available: true
      },
      report: {
        data: "Monthly Status Reports",
        available: true
      }
    }
  ]
}
