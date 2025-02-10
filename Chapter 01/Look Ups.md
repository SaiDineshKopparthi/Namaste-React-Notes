# 01 Inception

## 1. What is CDN?

A CDN **(Content Delivery Network)** is a system of distributed servers that work together to deliver web content (such as images, videos, scripts and HTML pages) to users more quickly and reliably. It reduces latency by caching content at multiple geographically dispersed data centers, ensuring users can access data from a location closer to them rather than from a single, centralized server.

#### Key Benefits of a CDN:

- **Faster Load Times –** By serving content from a nearby server, reducing latency.
- **Reduced Bandwidth Costs –** Caching reduces the amount of data transferred from the origin server.
- **Improved Reliability & Availability –** Distributes traffic, reducing server load and mitigating downtime risks.
- **Better Security –** Protects against DDoS attacks, data breaches, and traffic spikes.

Popular CDN providers include Cloudflare, Akamai, AWS CloudFront, Fastly, and Google Cloud CDN.

Let’s take an example of a global e-commerce website like Amazon or Netflix that serves millions of users worldwide.

#### Without a CDN:

If Amazon hosted all its website files (images, product pages, videos, etc.) on a single server in New York, users from far-away locations (like India or Australia) would experience slow load times because their requests must travel long distances to reach the server. This increases latency and causes delays.

#### With a CDN:

Amazon uses a CDN that has edge servers distributed around the world (e.g., in London, Mumbai, Sydney, etc.). When a user in Sydney visits Amazon, they don’t need to fetch data from New York. Instead, the CDN serves a cached copy of the website from the nearest edge server in Sydney. This results in:

- Faster page loading
- Lower bandwidth consumption
- Better handling of high traffic

**Another Real-World Example – Video Streaming (Netflix/YouTube):**
Netflix uses a CDN to store copies of its popular shows and movies at multiple locations worldwide. When a user in Europe streams a movie, they receive the content from a nearby CDN server rather than a central Netflix data center in the U.S. This ensures smooth playback with minimal buffering.

#### CDN Security & Caching – How They Work

**1. CDN Security Features:** A CDN doesn’t just speed up content delivery—it also protects websites from cyber threats like DDoS attacks, data breaches, and malicious bots. Here’s how:

- **DDoS Protection –** CDNs distribute incoming traffic across multiple servers, preventing attackers from overwhelming a single origin server. Services like Cloudflare and Akamai specialize in mitigating DDoS attacks.

- **Web Application Firewall (WAF) –** Many CDNs include firewalls that filter out malicious requests (e.g., SQL injection or cross-site scripting attacks) before they reach the website.

- **SSL/TLS Encryption –** CDNs help secure data in transit by enforcing HTTPS connections, preventing man-in-the-middle attacks.

- **Bot Management –** CDNs use AI to detect and block harmful bots that scrape content, conduct brute-force attacks, or spam websites.

**2. How CDN Caching Works:** CDNs improve performance by caching website content (i.e., storing copies of static files) at edge servers close to users. Here’s how:

- **Static Content Caching –** Images, JavaScript, CSS, and videos are stored on CDN servers for quick delivery.

- **Dynamic Content Optimization –** For frequently updated content (e.g., personalized dashboards, stock prices), CDNs use smart caching to serve partial content from the cache while fetching real-time data from the origin.

- **Cache Purging –** If website content changes, CDNs allow instant cache purging to refresh stored data across all servers.

#### Example:

Imagine you update your homepage banner. Instead of every user fetching it from your main server, a cache purge updates it across all edge locations so visitors see the new banner instantly! 2. What is the crossorigin attribute?

## 2. What is the `crossorigin` attribute in HTML tags?

# Igniting out app

## 1. What's the difference between tilde(`~`) and caret(`^`) in `package.json`?

- A clear cut explanation [here](https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json)

## 2. What is the difference between `package.json` and `package-lock.json`?
## 3. What is consistent hashing?