// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const AuditForm = () => {
//     // const [url, setUrl] = useState("https://.com");
//     // const [companyName, setCompanyName] = useState("");
//     // const [email, setEmail] = useState("");

//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         url: "",
//         companyName: "",
//         email: ""
//     });

//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log("Form submitted with data:", formData);

//         // Store form data in localStorage to pass to next page
//         localStorage.setItem('auditFormData', JSON.stringify(formData));

//         // Navigate to question answers page
//         navigate("/questionAnswer");
//     };

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [id]: value // Update the specific field in formData
//         }));
//     };

//     return (
//         <form onSubmit={handleSubmit} className="space-y-8 max-w-md">
//             {/* Header */}
//             <div className="space-y-6">
//                 <h1 className="text-4xl font-bold text-foreground leading-tight tracking-tight">
//                     Hello, drop your<br />
//                     website link here
//                 </h1>
//                 <p className="text-muted-foreground leading-relaxed">
//                     You can use this to do an SEO audit, get reports, and<br />
//                     optimize for generative AI bots like ChatGPT, Claude<br />
//                     etc.
//                 </p>
//             </div>

//             {/* Form */}
//             <div className="space-y-6">
//                 <div className="space-y-2">
//                     <Label htmlFor="url" className="text-sm font-medium text-foreground">
//                         First Name
//                     </Label>
//                     <Input
//                         id="firstName"
//                         type="text"
//                         value={formData.firstName || ""}
//                         onChange={handleChange}
//                         className="h-11 bg-input border border-border rounded-lg px-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-all"
//                         placeholder="Enter your first name"
//                         required
//                     />
//                 </div>
//                 <div className="space-y-2">
//                     <Label htmlFor="url" className="text-sm font-medium text-foreground">
//                         Last Name
//                     </Label>
//                     <Input
//                         id="lastName"
//                         type="text"
//                         value={formData.lastName || ""}
//                         onChange={handleChange}
//                         className="h-11 bg-input border border-border rounded-lg px-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-all"
//                         placeholder="Enter your last name"
//                         required
//                     />
//                 </div>

//                 <div className="space-y-2">
//                     <Label htmlFor="email" className="text-sm font-medium text-foreground">
//                         Business Email Address
//                     </Label>
//                     <Input
//                         type="email"
//                         id="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="h-11 bg-input border border-border rounded-lg px-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-all"
//                         placeholder="Enter email address"
//                         required
//                     />
//                 </div>

//                 <div className="space-y-2">
//                     <Label htmlFor="companyName" className="text-sm font-medium text-foreground">
//                         Business name
//                     </Label>
//                     <Input
//                         type="text"
//                         id="companyName"
//                         value={formData.companyName}
//                         onChange={handleChange}
//                         className="h-11 bg-input border border-border rounded-lg px-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-all"
//                         placeholder="Enter project name"
//                         required
//                     />
//                 </div>

//                 <div className="space-y-2">
//                     <Label htmlFor="url" className="text-sm font-medium text-foreground">
//                         Website URL
//                     </Label>
//                     <Input
//                         id="url"
//                         type="url"
//                         value={formData.url}
//                         onChange={handleChange}
//                         className="h-11 bg-input border border-border rounded-lg px-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-all"
//                         placeholder="https://example.com"
//                         required
//                     />
//                 </div>
//             </div>

//             {/* Continue Button */}
//             <div className="pt-6">
//                 <Button
//                     type="submit"
//                     className="w-full h-11 bg-gradient-primary text-white font-medium rounded-lg shadow-card hover:opacity-90 transition-opacity"
//                     size="lg"
//                 >
//                     Continue
//                 </Button>
//             </div>
//         </form>
//     );
// };








import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuditForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        url: "",
        companyName: "",
        email: "",
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);

        localStorage.setItem("auditFormData", JSON.stringify(formData));
        navigate("/questionAnswer");
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-8 max-w-md w-full bg-card p-8 rounded-2xl shadow-lg"
            >
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold text-foreground">
                        Hello, drop your <br /> website link here
                    </h1>
                    <p className="text-muted-foreground">
                        You can use this to do an SEO audit, get reports, and <br />
                        optimize for generative AI bots like ChatGPT, Claude <br /> etc.
                    </p>
                </div>

                {/* Form Fields */}
                <div className="flex flex-col gap-5">
                    <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter your first name"
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter your last name"
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="email">Business Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email address"
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="companyName">Business Name</Label>
                        <Input
                            id="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Enter business name"
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="url">Website URL</Label>
                        <Input
                            id="url"
                            type="url"
                            value={formData.url}
                            onChange={handleChange}
                            placeholder="https://example.com"
                            required
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    className="w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:opacity-90 transition-opacity"
                    size="lg"
                >
                    Continue
                </Button>
            </form>
        </div>
    );
};
