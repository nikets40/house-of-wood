import { db, storage } from "./firebase";
import { collection, doc, getDoc, addDoc, deleteDoc, setDoc, getDocs, Timestamp } from "@firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { ProductData, jsonToProductData, } from "../interfaces/allProducts";



export const AddNewProduct = async (productData: any) => {
    try {
        const _ref = collection(db, `products`);
        const doc = await addDoc(_ref, {});
        const productImages = await UploadFiles(productData.images, `products/${doc.id}`);
        const result = await setDoc(doc, {
            ...productData,
            images: productImages.fileUrls,
            discount: parseInt(productData.discount) || 0,
            price: parseInt(productData.price),
            finalPrice: parseInt(productData.finalPrice),
            date: Timestamp.now()
        });
        return { success: true, message: "Product Added! Successfully", data: result };

    } catch (e) {
        console.error(e.message);
        return { success: false, message: e.message };
    }

}

export const UploadFiles = async (files: File[], _refLocation: string) => {
    const fileUrls = [];
    try {
        for (let i = 0; i < files.length; i++) {
            const _fileRef = ref(storage, `${_refLocation}/${getUniqueName(files[i].name)}`);
            const _uploadTask = await uploadBytes(_fileRef, files[i]);
            const downloadUrl = await getDownloadURL(_fileRef);
            console.log("download url: ", downloadUrl);
            fileUrls.push(downloadUrl);
        }
        return { success: true, message: "Files Uploaded Successfully!", fileUrls };

    } catch (e) { }
}

const getUniqueName = (name: string) => {
    return new Date().getTime() + "." + name.split(`.`).pop()
}


export const GetAllProducts = async () => {
    try {
        const _ref = collection(db, `products`);
        const result = await getDocs(_ref);
        const allProductsData: ProductData[] = result.docs.map((doc) => jsonToProductData({ ...doc.data(), id: doc.id }));
        console.log("all products data: ", allProductsData);
        return { success: true, message: "Products Fetched Successfully!", data: allProductsData };
    }
    catch (e) {
        console.error(e.message);
        return { success: false, message: e.message };
    }
}

export const RemoveProduct = async (productId: string) => {
    try {
        const _ref = doc(db, `products/${productId}`);
        await deleteDoc(_ref);
        return { success: true, message: "Product Removed Successfully!" };
    }
    catch (e) {
        console.error(e.message);
        return { success: false, message: e.message };

    }
}

export const GetProductById = async (productID: string) => {
    try {
        const _ref = doc(db, `products/${productID}`);
        const result = await getDoc(_ref);
        return { exists: true, message: "Product Fetched Successfully!", data: result.data() };

    } catch (e) {
        console.error(e.message);
        return { exists: false, message: e.message };
    }
}

