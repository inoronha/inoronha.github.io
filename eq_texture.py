from PIL import Image, ImageOps

im = Image.open("texture_sq_smal.png").convert("L")
eq = ImageOps.equalize(im)
eq.save("texture_eq.png")
print(im.getextrema(), eq.getextrema())
