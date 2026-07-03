from PIL import Image
import os
import glob

folder = 'src/assets/companies/'
files = glob.glob(folder + '*')

for file in files:
    try:
        img = Image.open(file)
        img = img.convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # If pixel is close to white, make it transparent
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        
        # Save as PNG
        filename = os.path.splitext(file)[0]
        img.save(filename + '.png', "PNG")
        
        # If it was a jpg/jpeg, remove the original
        if file.lower().endswith('.jpg') or file.lower().endswith('.jpeg'):
            os.remove(file)
            print(f"Converted {file} to PNG and removed background.")
        else:
            print(f"Removed background from {file}.")
            
    except Exception as e:
        print(f"Error processing {file}: {e}")
