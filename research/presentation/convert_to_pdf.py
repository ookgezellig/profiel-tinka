"""
Convert PPTX to PDF using Windows COM automation
Requires Microsoft PowerPoint to be installed
"""
import os
import sys

PPTX_PATH = r"D:\KB-OPEN\github-repos\SaveToWaybackMachine\research\presentation\output\tinka_den_arend_profiel.pptx"
PDF_PATH = r"D:\KB-OPEN\github-repos\SaveToWaybackMachine\research\presentation\output\tinka_den_arend_profiel.pdf"

def convert_with_comtypes():
    """Try converting using comtypes (Windows COM)"""
    try:
        import comtypes.client

        # Initialize PowerPoint
        powerpoint = comtypes.client.CreateObject("PowerPoint.Application")
        powerpoint.Visible = 1

        # Open presentation
        presentation = powerpoint.Presentations.Open(PPTX_PATH)

        # Export to PDF (formatType 32 = ppSaveAsPDF)
        presentation.SaveAs(PDF_PATH, 32)

        # Close
        presentation.Close()
        powerpoint.Quit()

        print(f"PDF created: {PDF_PATH}")
        return True
    except ImportError:
        print("comtypes not available")
        return False
    except Exception as e:
        print(f"COM conversion failed: {e}")
        return False

def convert_with_win32():
    """Try converting using win32com"""
    try:
        import win32com.client

        powerpoint = win32com.client.Dispatch("PowerPoint.Application")

        # Open presentation
        presentation = powerpoint.Presentations.Open(PPTX_PATH, WithWindow=False)

        # Export to PDF
        presentation.SaveAs(PDF_PATH, 32)  # 32 = ppSaveAsPDF

        # Close
        presentation.Close()
        powerpoint.Quit()

        print(f"PDF created: {PDF_PATH}")
        return True
    except ImportError:
        print("win32com not available")
        return False
    except Exception as e:
        print(f"win32com conversion failed: {e}")
        return False

def main():
    """Try different conversion methods"""
    if not os.path.exists(PPTX_PATH):
        print(f"PPTX file not found: {PPTX_PATH}")
        sys.exit(1)

    # Try comtypes first
    if convert_with_comtypes():
        return

    # Try win32com
    if convert_with_win32():
        return

    # Fallback: provide instructions
    print("\n" + "="*60)
    print("AUTOMATIC CONVERSION NOT AVAILABLE")
    print("="*60)
    print(f"\nPPTX file created at:\n{PPTX_PATH}")
    print("\nTo create PDF manually:")
    print("1. Open the PPTX file in PowerPoint")
    print("2. File -> Export -> Create PDF/XPS Document")
    print("3. Save as PDF")
    print("\nOr use online converter:")
    print("- https://www.ilovepdf.com/powerpoint_to_pdf")
    print("- https://smallpdf.com/ppt-to-pdf")

if __name__ == "__main__":
    main()
