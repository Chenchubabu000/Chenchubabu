<script>
       
        function openLightbox(imageIndex) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImage = document.getElementById('lightbox-image');
            const lightboxCaption = document.getElementById('lightbox-caption');

       
            lightboxImage.src = `image${imageIndex}.jpg`;
            lightboxCaption.textContent = `Image ${imageIndex}`;

            
            lightbox.style.display = 'flex';
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.style.display = 'none';
        }
    </script