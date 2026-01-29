import vendors from '@/data/vendors.json';
import products from '@/data/products.json';

export async function getVendors() {
    return vendors;
}

export async function getVendorData(vendorSlug: string) {

    // Simulate a delay for demonstration purposes
    await new Promise((resolve) => setTimeout(resolve, 6000));
    
    const vendor = vendors.find(v => v.slug === vendorSlug);
    if(!vendor) return null;

    const vendorProducts = products.filter(
        p => p.vendorSlug === vendorSlug
    );

    return {
        vendor,
        products: vendorProducts
    };
}
