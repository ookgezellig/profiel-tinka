"""
Screenshot capture script for Tinka den Arend presentation
Captures screenshots of relevant websites
"""
from playwright.sync_api import sync_playwright
import os

# Create output directory
output_dir = r"D:\KB-OPEN\github-repos\SaveToWaybackMachine\research\screenshots"
os.makedirs(output_dir, exist_ok=True)

# URLs to capture
urls = [
    {
        "name": "01_ppf_apg_tinka_profiel",
        "url": "https://www.ppf-apg.nl/over-ppf-apg/wie-we-zijn/bestuur/tinka-den-arend",
        "wait": 3000
    },
    {
        "name": "02_ppf_apg_homepage",
        "url": "https://www.ppf-apg.nl/",
        "wait": 3000
    },
    {
        "name": "03_apg_homepage",
        "url": "https://apg.nl/",
        "wait": 3000
    },
    {
        "name": "04_apg_award_article",
        "url": "https://apg.nl/en/publication/ppf-apg-wins-pensioen-pro-award-for-pension-fund-of-the-year/",
        "wait": 3000
    },
    {
        "name": "05_pensioenpro_podcast",
        "url": "https://omny.fm/shows/pensioenpropodcast/twee-keer-invaren-met-tinka-den-arend-van-pensioen",
        "wait": 3000
    },
    {
        "name": "06_theorg_profile",
        "url": "https://theorg.com/org/werkenbijapg/org-chart/tinka-den-arend",
        "wait": 3000
    },
    {
        "name": "07_cfa_alm_congres",
        "url": "https://cfasociety.nl/en/events/alm-congress-2025-alm-in-transition-integration-innovation-international/6632272b-ba1d-4acf-a6a0-4ff5770b3cbd",
        "wait": 3000
    },
    {
        "name": "08_ppf_apg_bestuur",
        "url": "https://www.ppf-apg.nl/over-ppf-apg/wie-we-zijn/bestuur",
        "wait": 3000
    },
    {
        "name": "09_dnb_register",
        "url": "https://www.dnb.nl/en/public-register/information-detail/?registerCode=PWPNF&relationNumber=02392",
        "wait": 3000
    },
    {
        "name": "10_ppf_apg_nieuws_award",
        "url": "https://www.ppf-apg.nl/over-ppf-apg/nieuws/2025/ppf-apg-wint-award-voor-pensioenfonds-van-het-jaar",
        "wait": 3000
    }
]

def capture_screenshots():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={"width": 1920, "height": 1080},
            locale="nl-NL"
        )
        page = context.new_page()

        for item in urls:
            try:
                print(f"Capturing: {item['name']} - {item['url']}")
                page.goto(item['url'], wait_until="networkidle", timeout=30000)
                page.wait_for_timeout(item['wait'])

                # Close any cookie banners
                try:
                    page.click("text=Accepteren", timeout=2000)
                except:
                    pass
                try:
                    page.click("text=Accept", timeout=2000)
                except:
                    pass
                try:
                    page.click("[aria-label='close']", timeout=1000)
                except:
                    pass

                page.wait_for_timeout(1000)

                # Take full page screenshot
                filepath = os.path.join(output_dir, f"{item['name']}.png")
                page.screenshot(path=filepath, full_page=True)
                print(f"  Saved: {filepath}")

            except Exception as e:
                print(f"  Error capturing {item['name']}: {e}")

        browser.close()
        print("\nDone capturing screenshots!")

if __name__ == "__main__":
    capture_screenshots()
