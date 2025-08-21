import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const Loading = () => {
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();



    return (
        <div className="min-h-screen bg-white flex items-center">
            <div className="container mx-auto px-8 py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-xl text-gray-600">Preparing your AI visibility insights...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
