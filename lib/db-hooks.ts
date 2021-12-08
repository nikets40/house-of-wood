import { db, storage } from "./firebase";
import { collection, doc, getDoc, addDoc, setDoc, } from "@firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";


export const AddNewProduct = async (productData: any) => {
    try {
        const _ref = collection(db, `products`);
        const doc = await addDoc(_ref, {});
        const productImages = await UploadFiles(productData.images, `products/${doc.id}`);
        const result = await setDoc(doc, {
            ...productData,
            images: productImages.fileUrls
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

