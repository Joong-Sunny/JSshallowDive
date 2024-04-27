#include "stb_image.h"
#include "stb_image_resize.h"
#include "stb_image_write.h"

void resize_image(const char* input_path, const char* output_path, int new_width, int new_height) {
    int width, height, channels;
    unsigned char *img = stbi_load(input_path, &width, &height, &channels, 0);
    if (img == NULL) {
        printf("Error in loading the image\n");
        exit(1);
    }
    unsigned char *resized_img = (unsigned char *)malloc(new_width * new_height * channels);
    stbir_resize_uint8(img, width, height, 0, resized_img, new_width, new_height, 0, channels);
    stbi_write_jpg(output_path, new_width, new_height, channels, resized_img, 100);
    stbi_image_free(img);
    free(resized_img);
}