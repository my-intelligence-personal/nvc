import os

def rename_png_to_jpg_in_storyline():
    folder = "storyline"
    for filename in os.listdir(folder):
        if filename.lower().endswith(".png"):
            base = filename[:-4]
            new_filename = base + ".jpg"
            src = os.path.join(folder, filename)
            dst = os.path.join(folder, new_filename)
            if not os.path.exists(dst):
                os.rename(src, dst)
            else:
                print(f"Skipping {src}, {dst} already exists.")

if __name__ == "__main__":
    rename_png_to_jpg_in_storyline()
